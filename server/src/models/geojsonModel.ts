import mongoose from "mongoose";
const { Schema } = mongoose;
import myDB from "./dbConnection";

const GeoJSONSchema = new Schema({
  type: {
    type: String,
    match: /^Feature$/,
    required: true,
  },
  id: {
    type: String,
    required: true,
    match: /^(way|node|relation)\/\d+$/,
  },
  properties: Object,
  geometry: {
    type: {
      type: String,
      enum: [
        "Point",
        "LineString",
        "Polygon",
        "MultiPoint",
        "MultiPolygon",
        "MultiLineString",
      ],
      required: true,
    },
    coordinates: {
      type: [mongoose.Schema.Types.Mixed],
      required: true,
    },
  },
});

GeoJSONSchema.statics.saveOne = async function (feature) {
  const filter = { id: feature.id };
  return await this.findOneAndUpdate(filter, feature, {
    upsert: true, // Insert if not found
    new: true, // Return the (updated) document
  });
};

GeoJSONSchema.statics.saveMany = async function (features) {
  return await Promise.all(features.map((feature: any) => (this as any).saveOne(feature)));
};

const GeoJSON = myDB.model("GeoJSON", GeoJSONSchema);

export default GeoJSON;
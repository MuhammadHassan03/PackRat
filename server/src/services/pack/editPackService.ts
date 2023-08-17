import Pack from "../../models/packModel";

export const editPackService = async (packId, packData) => {
  const updatedPack = await Pack.findOneAndUpdate(
    { _id: packId },
    packData,
    { returnOriginal: false }
  );

  return updatedPack;
};
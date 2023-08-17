import { deletePackService } from "../../services/pack/pack.service";

/**
 * Deletes a pack.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @return {Promise} A promise that resolves with the deletion result.
 */
export const deletePack = async (req, res) => {
  try {
    const { packId } = req.body;

    await deletePackService(packId);

    res.status(200).json({ msg: "pack was deleted successfully" });
  } catch (error) {
    res.status(404).json({ msg: "Unable to delete pack" });
  }
};
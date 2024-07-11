import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
    if (!file) return;

    const fileUploaded = await storage.createFile(
        "668b04df000e406f9ce2",
        ID.unique(),
        file,
    );

    return fileUploaded;
};

export default uploadImage;
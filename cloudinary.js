/* ============================================================
   MyVault BD — Cloudinary Upload
   ▸ Unsigned upload — API Secret লাগে না
   ============================================================ */

const CLOUD_NAME    = "vof1rvhz";              // ← আপনার Cloud Name
const UPLOAD_PRESET = "myvault_unsigned";      // ← আপনার Upload Preset

/**
 * Cloudinary-তে ছবি আপলোড করবে
 * @param {Blob} blob — ছবির blob
 * @param {string} folder — Cloudinary-তে ফোল্ডার
 * @returns {Promise<string>} — ছবির URL
 */
export async function uploadToCloudinary(blob, folder = "captures"){
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

  const formData = new FormData();
  formData.append("file", blob);
  formData.append("upload_preset", UPLOAD_PRESET);
  if (folder) formData.append("folder", folder);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData
    });

    if (!response.ok){
      const errText = await response.text();
      console.error("Cloudinary error:", errText);
      return null;
    }

    const data = await response.json();
    console.log("✓ Cloudinary upload:", data.secure_url);
    return data.secure_url;
  } catch (err) {
    console.error("Cloudinary fetch error:", err);
    return null;
  }
}

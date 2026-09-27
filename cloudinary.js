/* ============================================================
   MyVault BD — Cloudinary Upload (Retry সহ)
   ▸ Unsigned upload — API Secret লাগে না
   ============================================================ */

const CLOUD_NAME    = "vof1rvhz";
const UPLOAD_PRESET = "myvault_unsigned";

export async function uploadToCloudinary(blob, folder = "captures"){
  const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
  const MAX_RETRIES = 3;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++){
    try {
      const formData = new FormData();
      formData.append("file", blob);
      formData.append("upload_preset", UPLOAD_PRESET);
      if (folder) formData.append("folder", folder);

      console.log("[Cloudinary] Try " + attempt + "/" + MAX_RETRIES);

      const response = await fetch(url, {
        method: "POST",
        body: formData
      });

      if (!response.ok){
        const errText = await response.text();
        console.error("[Cloudinary] HTTP " + response.status + ": " + errText);

        if (attempt < MAX_RETRIES){
          await new Promise(r => setTimeout(r, 1500 * attempt));
          continue;
        }
        return null;
      }

      const data = await response.json();
      console.log("[Cloudinary] ✓ " + data.secure_url);
      return data.secure_url;

    } catch (err) {
      console.error("[Cloudinary] Attempt " + attempt + " failed:", err.message || err);

      if (attempt < MAX_RETRIES){
        await new Promise(r => setTimeout(r, 1500 * attempt));
        continue;
      }
      return null;
    }
  }

  return null;
}

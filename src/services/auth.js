export const fetchUser = async () => {
  try {
    const response = await fetch("https://gitgoogleloginbackend-production.up.railway.app/api/auth/user", { credentials: "include" });
    if (!response.ok) throw new Error("Failed to fetch user");
    return response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};
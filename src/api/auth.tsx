// src/api/auth.ts
export async function registerUser(userData: {
  firstName: string;
  lastName: string;
  email: string;
  roles: string[];
}) {
  try {
    const response = await fetch("http://192.168.0.13:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed");
    }

    return await response.json();
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

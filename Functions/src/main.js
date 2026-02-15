
export default async ({ req, res, log, error }) => {
  // You can use the Appwrite SDK to interact with other services

  return res.json({
    motto: "Build like a developer, not a business",
    learn: "https://appwrite.io/docs",
    connect: "https://appwrite.io/discord",
    getInspired: "https://builtwith.appwrite.io",
  });
};

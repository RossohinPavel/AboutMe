const PROD_API_URL = "https://api.github.com/users/RossohinPavel";

const DEV_API_URL = "./mock/user.json";

export const API_URL = import.meta.env.PROD ? PROD_API_URL : DEV_API_URL;
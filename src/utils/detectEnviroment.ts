const isDevelopment = () => process.env.ENVIRONMENT === "DEV";
const isProduction = () => process.env.ENVIRONMENT === "PROD";

export const detectEnviroment = {
	isDevelopment,
	isProduction,
};

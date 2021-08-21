module.exports = {
	MODE: 'development',
	PORT: 4000,
	DEV_STRICT_MODE: 'false',
	DEBUG: 'true',
	ERROR_BOUNDARY: 'true',
	FRIDA_TEXT_COLOR: 'text-danger',
	ROUTER_API: 'v1',
	TAX_RATE: '0',
	TEST_IP: '195.77.206.202',
	WEBPROJECT: 'FRIDA DESK',
	WEBPROJECT_SHORT: 'Frida',

	// coockie & tokens
	COOKIE_TOKEN: 'frida_access',
	COOKIE_TOKEN_MAXAGE: '920',
	COOKIE_REFRESH: 'frida_refresh',
	COOKIE_REFRESH_MAXAGE: '604800',
	TOKEN_ACCESS_EXPIRY: '15min',
	TOKEN_ACTIVATE_MAX: '72',
	TOKEN_ACTIVATE_VAL: 'hours',
	TOKEN_ACTIVATE_EXPIRY: '72hours',
	TOKEN_RECOVER_EXPIRY: '5h',
	TOKEN_REFRESH_EXPIRY: '7days',

	// db
	DB_USER: 'postgres',
	DB_HOST: 'localhost',
	DB_DATABASE: 'postgres',
	DB_PASSWORD: '7dvayd',
	DB_PORT: '5432',

	// images
	IMG_USE_URL: 'false',

	// keys:
	BITLINK_TOKEN: 'fd15ad8fe446611b507479ba69b926e345bb2150',
	BRAINTREE_MERCHANT_ID: '96kq8925ndqp7fgj',
	BRAINTREE_PUBLIC_KEY: 'w77g82r89bx3n74v',
	BRAINTREE_PRIVATE_KEY: '04e13738f89f8458a1011ad1df8fa3d6',
	BRAINTREE_TOKEN_KEY: 'sandbox_cshmbb5z_96kq8925ndqp7fgj',
	GOOGLE_KEY: 'AIzaSyBnT4-4X3VO2kJJkwlnhbkfjXLRKHi8-LY',
	GOOGLE_MAP_KEY: 'c6de099e0779ba72',
	IPSTACK_KEY: '803a8989284ac7796e3e16ef45c58fb5',
	MAIL_PASSWORD: 'esquinZo12gm',
	TOKEN_ACCESS_SECRET: '2d9dkjs7sj',
	TOKEN_ACTIVATE_SECRET: 'ud76sdhsuy',
	TOKEN_REFRESH_SECRET: 'fsg532gdsd',

	// limits
	BCRYPT_SALT_ROUNDS: '6',
	MAX_ROWS: '10',
	PHONE_UPDATE_LIMIT_DAYS: '5',
	SOCKET_LIMIT: '100',
	TRAIL_DAYS: '14',

	// mail
	MAIL_USER: '7dvayd@gmail.com',
	MAIL_WEBMASTER: '7dvayd@gmail.com',
	MAIL_NOREPLY: 'noreply@fridadesk.com',
	MAIL_TESTER: 'true',
	MAIL_TEST_RECEIVER: 'arlt1979@gmail.com',

	// paths
	ASSET_PATH: '/public/assets',
	AVATAR_PATH: '/assets/avatar',
	AVATAR_PATH_SERVER: '/public/assets/avatar',
	COOKIE_PATH: '/',
	DIST_PATH: '../dist',
	INVOICE_PATH: '/public/invoices',
	IMG_URL_PATH: 'http://www.fridadesk/images/user/',
	PUBLIC_PATH: '../public',

	// sms & whatsapp
	SMS_SENDING: 'false',
	SMS_TEST_RECEIVER: '+34664251058',
	SMS_TESTER: 'true',
	TWILIO_ACCOUNT_SID: 'AC9576be8968a58e8fb11d93d2ebd2ba6d',
	TWILIO_AUTH_TOKEN: '947080c6cd0bae6db6b36e229c6d8b63',
	TWILIO_PHONE_NUMBER: '+447403178001',
	WHATSAPP_ACTIVE: 'false',

	// urls
	PROJECT_URL: 'http://localhost:4000',
	PROJECT_URL_BITLINK: 'http://www.fridadesk.com',
	PUBLIC_URL: './public',
	SOCKET_URL: 'http://127.0.0.1:4000',
};

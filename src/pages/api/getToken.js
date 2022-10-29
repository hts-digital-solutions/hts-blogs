import _cookie from "cookie";
import { getCookie } from "../../utils/helper_functions";

const getToken = async (req, res) => {
    try {
        let token = getCookie(type, req.headers.cookie);
        token = JSON.parse(token);
        const access_token = token ?? null;
        let user = null

        if (access_token) {
            const response = await fetch(process.env.BASE_URL + '/api/auth/profile', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + access_token
                }
            })

            const data = await response.json()
            if (data?.status) {
                user = data?.user
            }

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(
                JSON.stringify({
                    accessToken: user ? access_token : null,
                    user
                })
            );
        } else {
            res.end(JSON.stringify({ accessToken: null, user: null }));
        }
    } catch (error) {
        res.end(JSON.stringify(error));
    }
};

export default getToken;

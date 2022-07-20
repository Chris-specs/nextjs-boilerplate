
export default function handler(req, res) {
    const { body } = req;

    return res.status(200).json({
        status: 200,
        data: {
            user: body.user ?? null,
        },
        token: require('crypto').randomBytes(16).toString('hex'),
    });
}

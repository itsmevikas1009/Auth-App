import { User } from "../models/user.model.js"

export const AdminDashoard = async (req, res) => {
    try {
        if (req.accountType !== 'Admin') {
            return res.json({ status: 402, message: 'You are not admin!' })
        }

        const data = await User.find({ isVerified: false }).select("-password");
        return res.json({ status: 200, message: "Not Verified User List", userList: data });
    } catch (err) {
        return res.json({ status: 403, Error: err });
    }
}


export const ApproveUserAccount = async (req, res) => {
    try {
        if (req.accountType !== 'Admin') {
            return res.json({ status: 401, message: 'You are not admin!' });
        }
        const userId = req.body.userId;

        if (!userId) {
            return res.json({ status: 402, message: 'User id required' })

        }

        const updateDetails = await User.findByIdAndUpdate(userId, { isVerified: true }, { new: true });
        return res.json({ status: 200, message: "Account Approved Successfully", updateDetails });

    } catch (error) {
        return res.json({ status: 403, message: "Validation error", error });

    }

}
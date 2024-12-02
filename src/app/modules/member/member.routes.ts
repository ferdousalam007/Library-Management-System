import { MemberController } from "./member.controller";

const router = require('express').Router();



router.post("/", MemberController.createMember);
router.get("/", MemberController.getAllMembers);
router.get("/:id", MemberController.getSingleMemberFromDB);
router.put("/:id", MemberController.updateMemberIntoDB);
router.delete("/:id", MemberController.deleteMemberFromDB);

export const MemberRoute = router
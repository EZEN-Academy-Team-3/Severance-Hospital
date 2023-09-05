/**
 * @ File Name: CheckBox.js
 * @ Author: 박다윗 (davidpark.0098@gmail.com)
 * @ Last Update: 2022-11-26 15:02:00
 * @ Description: material ui 체크박스 **사용안함**
 */

/** import */
import * as React from "react";

/** material ui */
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";

/** 버튼 스타일 */
const BpIcon = styled("span")(({ theme }) => ({
  width: 17,
  height: 17,
  background: "white",
  boxShadow: "none",
  border: "1px solid #aaa",
  boxSizing: "border-box",
  borderRadius: 0
}));

/** 버튼 체크 스타일 */
const BpCheckedIcon = styled(BpIcon)({
  background: "white url(./img/ico-checkbox-checked.png) no-repeat 45% center",
  backgroundSize: "13px 10px"
});

/** 버튼 스타일 적용 */
function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" }
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

/** 버튼 출력 */
export default function CustomizedCheckbox() {
  return (
    <div>
      <BpCheckbox />
    </div>
  );
}

import React, { useContext, useState } from "react";
import { ContextI18n } from "../../App";
import { Avatar, IconButton, MenuItem, Select } from "@mui/material";
import spainFlag from "../../assets/banderas/spain.png";
import englishFlag from "../../assets/banderas/english.jpg";
import frenchFlag from "../../assets/banderas/french.png";
import "./I18n.scss";
import { styled } from "@mui/material/styles";

const WhiteLabel = ({ children }) => (
  <label className="white-label">{children}</label>
);

const I18n = () => {
  const { locale, selectLanguage } = useContext(ContextI18n);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (event) => {
    selectLanguage(event.target.value);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const languageOptions = [
    { value: "es-ES", label: "ES", flag: spainFlag },
    { value: "en", label: "EN", flag: englishFlag },
    { value: "fr", label: "FR", flag: frenchFlag },
  ];

  const RectangularAvatar = styled(Avatar)({
    borderRadius: 0,
    width:"15px",
    height:"12px",
  });
  

  return (
    <div className="i18n">
      <Select
        value={locale || 'es-ES'}
        onChange={handleLanguageChange}
        open={isOpen}
        onOpen={handleOpen}
        onClose={handleClose}
        inputProps={{ "aria-label": "language" }}
        className="black-select"
      >
        {languageOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <IconButton>
              {/* <Avatar src={option.flag} alt={option.label} /> */}
              <RectangularAvatar
                src={option.flag}
                alt={option.label}
                className="flag-avatar"
              />
            </IconButton>
            <WhiteLabel>{option.label}</WhiteLabel>
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default I18n;


// import { Avatar, IconButton } from "@mui/material";
// import React, { useContext } from "react";
// import { ContextI18n } from "../../App";
// import "./I18n.scss";
// import spain from "../../assets/banderas/spain.png";
// import english from "../../assets/banderas/english.jpg";
// import french from "../../assets/banderas/french.png";
// //import { makeStyles } from "@material-ui/core/styles";



// const I18n = () => {
//   const { locale, selectLanguage } = useContext(ContextI18n);
//   console.log(locale);
//   return (
//     <div class="i18n">
//       {locale === "es-ES" ? (
//         ""
//       ) : (
//         <IconButton onClick={() => selectLanguage("es-ES")}>
//           <Avatar
//             sx={{ width: 24, height: 24 }}
//             src={spain}
//             aria-label="recipe"
//           ></Avatar>
//         </IconButton>
//       )}
//       {locale === "en" ? (
//         ""
//       ) : (
//         <IconButton onClick={() => selectLanguage("en")}>
//           <Avatar
//             sx={{ width: 24, height: 24 }}
//             src={english}
//             aria-label="recipe"
//           ></Avatar>
//         </IconButton>
//       )}
//       {locale === "fr" ? (
//         ""
//       ) : (
//         <IconButton onClick={() => selectLanguage("fr")}>
//           <Avatar
//             sx={{ width: 24, height: 24, border: '0.2px solid lightgray'}}
//             src={french}
//             aria-label="recipe"
//           ></Avatar>
//         </IconButton>
//       )}
//     </div>
//   );
// };

// export default I18n;

import React, { useContext } from "react";
import { ContextI18n } from "../../App";
import { Avatar, IconButton, MenuItem, Select } from "@mui/material";
import spainFlag from "../../assets/banderas/spain2.png";
import englishFlag from "../../assets/banderas/english.jpg";
import frenchFlag from "../../assets/banderas/french.png";
import { styled } from "@mui/material/styles";

const I18n = () => {
  const { locale, selectLanguage } = useContext(ContextI18n);

  const handleLanguageChange = (event) => {
    selectLanguage(event.target.value);
  };
  const WhiteLabel = styled("label")({
    color: "black",
    padding:"5px"
  });
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: theme.spacing(2),
    height: theme.spacing(2),
    borderRadius: 0,
  }));

  const languageOptions = [
    { value: "es-ES", label: "Español", flag: spainFlag },
    { value: "en", label: "English", flag: englishFlag },
    { value: "fr", label: "Français", flag: frenchFlag },
  ];

  return (
    <div className="i18n">
      <Select value={locale} onChange={handleLanguageChange}>
        {languageOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <IconButton>
            <SmallAvatar src={option.flag} alt={option.label} />
              {/* <Avatar src={option.flag} alt={option.label} /> */}
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

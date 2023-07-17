import { Avatar, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { ContextI18n } from "../../App";
import "./I18n.scss";
import spain from "../../assets/banderas/spain.png";
import english from "../../assets/banderas/english.jpg";
import french from "../../assets/banderas/french.png";
//import { makeStyles } from "@material-ui/core/styles";



const I18n = () => {
  const { locale, selectLanguage } = useContext(ContextI18n);
  console.log(locale);
  return (
    <div class="i18n">
      {locale === "es-ES" ? (
        ""
      ) : (
        <IconButton onClick={() => selectLanguage("es-ES")}>
          <Avatar
            sx={{ width: 24, height: 24 }}
            src={spain}
            aria-label="recipe"
          ></Avatar>
        </IconButton>
      )}
      {locale === "en" ? (
        ""
      ) : (
        <IconButton onClick={() => selectLanguage("en")}>
          <Avatar
            sx={{ width: 24, height: 24 }}
            src={english}
            aria-label="recipe"
          ></Avatar>
        </IconButton>
      )}
      {locale === "fr" ? (
        ""
      ) : (
        <IconButton onClick={() => selectLanguage("fr")}>
          <Avatar
            sx={{ width: 24, height: 24, border: '0.2px solid lightgray'}}
            src={french}
            aria-label="recipe"
          ></Avatar>
        </IconButton>
      )}
    </div>
  );
};

export default I18n;

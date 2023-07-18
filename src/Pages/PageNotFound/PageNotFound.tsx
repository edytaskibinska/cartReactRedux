import { FC } from "react";

import "./PageNotFound.scss";

interface IPageNotFound {
  id?: string;
}

const PageNotFound: FC<IPageNotFound> = ({ id }) => {
  return (
    <div className="page404" id={id}>
      <div className="text404">404</div>
      <div className="oups">Oups! La page que vous demandez n'existe pas.</div>
      <a className="link" href="/">
        Retourner sur la page d’accueil
      </a>
    </div>
  );
};

export default PageNotFound;

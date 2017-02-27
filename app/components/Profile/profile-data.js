import React, { PropTypes } from 'react';
import { v4 } from 'uuid';

export function selectUser(idUser, profiles, api, openCloseModal, setAccount) {
  if (idUser) { return undefined; }
  const profilesData = profiles.map(({ id, name, profileImage } = {}) => <div key={ v4() }
                                                                              className='profile-images-block-block'
                                                                              data-user={ id }
                                                                              onClick={ setAccount }>
                                                                            <img className='profile-images-block-block__img'
                                                                                 src={ `${ api }/media/${ profileImage }` }
                                                                                 alt='profile-image'
                                                                                 data-user={ id } />
                                                                            <span data-user={ id }>{ name }</span>
                                                                         </div>);

  return <div className='profile'>
           <span className='profile__title'>¿QUIÉN ESTÁ VIENDO AHORA?</span>
             <div className='profile-images-block'>
               { profilesData }
             </div>
           <span className='profile__text' onClick={ openCloseModal }>AÑADIR PERFIL</span>
         </div>;
}

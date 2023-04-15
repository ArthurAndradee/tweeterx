import React from 'react';

import Feed from '../Feed';

import { 
    Container, 
    Banner, 
    Avatar, 
    ProfileData, 
    LocationIcon, 
    CakeIcon, 
    Followage,
    EditButton, 
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outline>Editar perfil</EditButton>

            <h1>Arthur Andrade</h1>
            <h2>@arthurandradee</h2>

            <p>
                Estudante de Ensino Médio / Desenvolvedor front-end nas horas vagas
            </p>

            <ul>
                <li>
                    <LocationIcon/>
                    Rio Grande do Sul, Brasil
                </li>
                <li>
                    <CakeIcon/>
                    Nascido(a) em 20 de junho de 2005 
                </li>
            </ul>

            <Followage>
                <span>
                    seguindo <strong>438 </strong>
                </span>
                <span>
                    <strong>4 </strong> seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  )
}

export default ProfilePage;
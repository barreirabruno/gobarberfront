import React from 'react';

import { MdNotifications } from 'react-icons/md';

import {
  Container,
  Badge,
  NofiticationList,
  Scroll,
  Notification,
} from './styles';

export default function Notifications() {
  return (
    <Container>
      <Badge hasUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NofiticationList>
        <Scroll>
          <Notification unread>
            <p>Você possui um novo agendamento para a amanhã</p>
            <time>há 2 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para a amanhã</p>
            <time>há 2 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para a amanhã</p>
            <time>há 2 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
          <Notification>
            <p>Você possui um novo agendamento para a amanhã</p>
            <time>há 2 dias atrás</time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NofiticationList>
    </Container>
  );
}

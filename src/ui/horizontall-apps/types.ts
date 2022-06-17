import { FC } from 'react';

export enum AppName {
  City = 'city',
  GdePosylka = 'deliver',
  Dictionary = 'dict',
  Friends = 'friends',
  Hinter = 'hinter',
  Medic = 'medic',
  Stuff = 'stuff',
}

export type AppContent = {
  Icon: FC;
  title: string;
  subTitle?: string;
};

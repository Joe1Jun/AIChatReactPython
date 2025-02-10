export enum SidebarView {
  CHAT = 'CHAT',
  SETTINGS = 'SETTINGS',
  HISTORY = 'HISTORY',
  PROFILE = 'PROFILE',
}

export type CommonProps = {
  onSomeAction?: () => void;
};
  
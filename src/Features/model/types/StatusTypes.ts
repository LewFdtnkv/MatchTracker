export enum StatusEnum{
    AllStatus = 'Все статусы',
    Live = 'Live',
    Finished = 'Finished',
    MatchPreparing = 'MatchPreparing'
}
export interface StatusState {
  status: StatusEnum;
}
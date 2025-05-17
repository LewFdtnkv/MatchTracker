export enum ResultEnum{
    Live = 'Live',
    Finished = 'Finished',
    MatchPreparing = 'MatchPreparing'
}
export interface ResultWindowProps {
    status: ResultEnum;
  }
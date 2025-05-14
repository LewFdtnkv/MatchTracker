export enum results{
    Live = 'Live',
    Finished = 'Finished',
    MatchPreparing = 'MatchPreparing'
}
export interface ResultWindowProps {
    status: results;
  }
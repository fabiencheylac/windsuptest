export interface Prevision {

  day: number;
  dayname: string;
  month: string;
  year:number;
  info: {
      valueheure: number;
      moyen: number;
      min: number;
      max: number;
      orientation: string;
      pourcentage: number;
    }

}

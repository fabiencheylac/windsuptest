export interface PaysRegion {
  nom: string;
  ref: string;
  id: number;
  showDetails: boolean;
  iconinit: string;
  icon: string;
  region:{
      nomRegion: string;
      refRegion: string;
      idRegion: number;
    }
  favoris:{
    id: number,
    nom: string,
    type: string,
    mesure : number,
    orientation:string,
  }
}

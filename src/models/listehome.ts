export interface ListeHome {
    nom: string;
    ref: string;
    id: number;
    type: boolean;
    showDetails: boolean;
    iconleft: string;
    iconright:string;
    region:{
        nomRegion: string;
        refRegion: string;
        idRegion: number;
      }
    favoris:{
      idFavoris: number,
      nom: string,
      type: string,
      mesure : number,
      orientation:string,
    }
  }


export interface IDashboard {
  totalVideos?: any;
}

export class Dashboard implements IDashboard {
  constructor(
    public totalVideos?: any
  ) {
    this.totalVideos = totalVideos ? totalVideos : 0;
  }
}

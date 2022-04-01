const ZingMp3 = require('zingmp3-api-full')

module.exports ={

  // get song
  getSong: async (req, res) =>{
    const data = await ZingMp3.getSong(req.query.id)
    res.json(data)
  },

  // search
  search: async (req,res) =>{
     const data = await ZingMp3.search(req.query.key)
     res.json(data)
  },

  // get100
  getTop100: async (req, res) =>{
    const data = await ZingMp3.getTop100()
    res.json(data)
  },

  // get Play list
  getPlaylist: async (req, res) =>{
    const data = await ZingMp3.getPlaylist(req.query.id)
    res.json(data)
  },

  // get Home
  getHome: async (req, res) =>{
    const data = await ZingMp3.getHome(res.query.page)
    res.json(data)
  },

  // get Chart home
  getChartHome: async (req, res) =>{
    const data = await ZingMp3.getChartHome()
    res.json(data)
  },

  // get new release chart
  getNewReleaseChart: async(req, res) =>{
    const data =  await ZingMp3.getNewReleaseChart()
    res.json(data)
  },

  // get info
  getInfo: async(req, res) =>{
    const data = await ZingMp3.getInfo(req.query.id)
    res.json(data)
  },

  // get Artist 
  getArtist: async(req, res) =>{
    const data = await ZingMp3.getArtist(req.query.name)
    res.json(data)
  },

  // get category MV
  getCategoryMV: async(req, res) =>{
    const data = await ZingMp3.getCategoryMV(req.query.id)
    res.json(data)
  },

  // getVideo
  getVideo: async(req, res) =>{
    const data = await ZingMp3.getVideo(req.query.id)
  }

}
import { createStore } from 'vuex'
import MediaService from '@/Services/MediaService';
import axios from 'axios';

export default createStore({
  state: {
    searchData: null,
    datas: null,
    cardLoading: true,
    trendingDatas: null,
    movieDatas: null,
    showDatas: null,
    showData: null,
  },
  mutations: {
    SET_SEARCH_DATA(state, payload) {
      state.searchData = null;
      state.searchData = payload;
    },
    SET_DATAS(state, payload) {
      state.datas = payload;
      state.cardLoading = false;
    },
    CARD_LOADED(state) {
      state.cardLoading = true;
    },
    SET_TRENDİNG(state,payload) {
      state.trendingDatas = payload;
    },
    SET_MOVIE(state,payload) {
      state.movieDatas = payload;
    },
    SET_SHOW(state,payload) {
      state.showDatas = payload;
    },
    GET_SHOW(state, payload) {
      state.showData = payload;
    }
  },
  actions: {
    async fetchGetSearchData({ commit }, payload) {
      MediaService.getSearchData(payload)
        .then(res => {
          commit('SET_SEARCH_DATA', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchMovies(context, { media, category }) {
      setTimeout(() => {
        MediaService.getMovies(media, category)
        .then(res => {
          context.commit('SET_DATAS', res.data.results)
        })
        .catch(err => console.log(err)) 
      }, 1000)

    },
    async fetchPopularShows({ commit }) {
      MediaService.getPopularShows()
        .then(res => {
          commit('SET_POPULAR', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchPopularActors({ commit }) {
      MediaService.getPopularActors()
        .then(res => {
          commit('SET_POPULAR', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchTodayTrending({ commit }) {
      MediaService.getTodayTrending()
        .then(res => {
          commit('SET_TRENDİNG', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchWeekTrending({ commit }) {
      MediaService.getWeekTrending()
        .then(res => {
          commit('SET_TRENDİNG', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchNowPlayingMovies({ commit }) {
      MediaService.getNowPlayingMovies()
        .then(res => {
          commit('SET_MOVIE', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchTopRatedMovies({ commit }) {
      MediaService.getTopRatedMovies()
        .then(res => {
          commit('SET_MOVIE', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchUpComingMovies({ commit }) {
      MediaService.getUpComingMovies()
        .then(res => {
          commit('SET_MOVIE', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchTopRatedShows({ commit }) {
      MediaService.getTopRatedShows()
        .then(res => {
          commit('SET_SHOW', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchAiringTodayShows({ commit }) {
      MediaService.getAiringTodayShows()
        .then(res => {
          commit('SET_SHOW', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchOnTheAirShows({ commit }) {
      MediaService.getOnTheAirShows()
        .then(res => {
          commit('SET_SHOW', res.data.results)
        })
        .catch(err => console.log(err)) 
    },
    async fetchMediaShow({ commit }, value) {
      MediaService.getMediaShow(value.id, value.cat)
        .then(res => {
          commit('GET_SHOW', res.data)
        })
        .catch(err => console.log(err)) 
    },
    async fetchActorShow({ commit }, id) {
      MediaService.getActorShow(id)
        .then(res => {
          commit('GET_SHOW', res.data)
        })
        .catch(err => console.log(err)) 
    }
  },
  modules: {
  }
})

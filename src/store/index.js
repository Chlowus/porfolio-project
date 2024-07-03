import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2/dist/sweetalert2'
const portfolioURL = 'https://chlowus.github.io/first-API/data/'

export default createStore({
  state: {
    aboutMe: null,
    projects: null,
    skills: null,
    education: null,
    workExperience: null,
    testimonials: null
  },
  getters: {
  },
  mutations: {
    setAboutMe(state, value) {
      state.aboutMe = value
    },
    setProjects(state, value) {
      state.projects = value
    },
    setSkills(state, value) {
      state.skills = value
    },
    setEducation(state, value) {
      state.education = value
    },
    setWorkExperience(state, value) {
      state.workExperience = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
    }
  },
  actions: {
    async fetchAboutMe(context){
      try{
        let{aboutMe}= await (await axios.get(portfolioURL)).data
        context.commit('setAboutMe', aboutMe)
        console.log(aboutMe)
      } catch (e) {
        Swal.fire({
          title:'Error',
          text: 'Failed to fetch about me data',
          icon: 'error'
        })
      }
    },
    async fetchEducation(context){
      try{
        let{education}= await (await axios.get(portfolioURL)).data
        context.commit('setEducation', education)
      } catch (e) {
        Swal.fire({
          description:'Error',
          year: 'Failed to fetch year',
          institution: 'error',
          contact:'error'
        })
      }
    },
    async fetchWorkExperience(context){
      try{
        let{workExperience}= await (await axios.get(portfolioURL)).data
        context.commit('setWorkExperience', workExperience)
      } catch (e) {
        Swal.fire({
          description:'Error',
          year: 'Failed to fetch year',
          placeOfWork: 'error',
          contact:'error'
        })
      }
    },
  },
  modules: {
  }
})

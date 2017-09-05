import Vue from 'vue'
import VueRouter from 'vue-router'

import Register from '../views/Auth/Register.vue'
import Login from '../views/Auth/Login.vue'
import RecipeIndex from '../views/Recipe/index.vue'
import RecipeShow from '../views/Recipe/Show.vue'
import RecipeForm from '../views/Recipe/Form.vue'
import Test from '../views/test.vue'


Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes : [
	{path: '/', component: RecipeIndex},
	{path: '/recipes/create', component: RecipeForm, meta: {mode: 'create'}},
	{path: '/recipes/:id/edit', component: RecipeForm, meta: {mode: 'edit'}},
	{path: '/recipes/:id', component: RecipeShow},
	{path: '/register', component: Register},
	{path: '/test', component: Test},
	{path: '/login', component: Login}
	]
	
})

export default router 
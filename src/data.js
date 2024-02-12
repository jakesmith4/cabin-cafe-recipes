import meatLoafImg from './img/entrees/meat-loaf.jpg';
import cornBreadDressingImg from './img/entrees/corn-bread-dressing.jpg';
import toscanaSoupImg from './img/entrees/toscana-soup.jpg';
import creamPotatoesImg from './img/entrees/cream-potatoes.jpg';
import macAndCheeseImg from './img/entrees/mac-and-cheese.jpg';

import baconBitsImg from './img/ingredients/bacon-bits.jpg';
import blackPepperImg from './img/ingredients/black-pepper.jpg';
import butterImg from './img/ingredients/butter.jpg';
import celeryStalksImg from './img/ingredients/celery-stalks.jpg';
import cknBrothImg from './img/ingredients/chicken-broth.jpg';
import cornMuffinMixImg from './img/ingredients/corn-muffin-mix.jpg';
import eggsImg from './img/ingredients/eggs.jpg';
import elbowMacImg from './img/ingredients/elbow-mac.jpg';
import garlicClovesImg from './img/ingredients/garlic-cloves.jpg';
import greenBellPepperImg from './img/ingredients/green-bell-pepper.jpg';
import groundBeefImg from './img/ingredients/ground-beef.jpg';
import heavyCreamImg from './img/ingredients/heavy-cream.png';
import italianBreadCrumbsImg from './img/ingredients/italian-bread-cumbs.jpg';
import italianSausageImg from './img/ingredients/italian-sausage.png';
import italianSeasingImg from './img/ingredients/italian-seasoning.jpg';
import kaleImg from './img/ingredients/kale.jpg';
import ketchupImg from './img/ingredients/ketchup.jpg';
import meatLoafSeasoningImg from './img/ingredients/meat-loaf-seasoning.jpg';
import milkImg from './img/ingredients/milk.jpg';
import mustardImg from './img/ingredients/mustard.jpg';
import potatoesImg from './img/ingredients/potatoes.jpg';
import rubbedSageImg from './img/ingredients/rubbed-sage.jpg';
import saltImg from './img/ingredients/salt.jpg';
import stoveTopStuffingImg from './img/ingredients/stove-top-stuffing.jpg';
import whiteOnionImg from './img/ingredients/white-onion.jpg';

export const meatLoafData = [
  {
    ingredient: '1 package of meat loaf seasoning',
    url: meatLoafSeasoningImg,
  },
  { ingredient: '2 lbs ground beef', url: groundBeefImg },
  { ingredient: '2 eggs', url: eggsImg },
  {
    ingredient: '3/4 cup milk',
    url: milkImg,
  },
  {
    ingredient: '3/4 cup italian breadcrumbs',
    url: italianBreadCrumbsImg,
  },
  {
    ingredient: '1/2 white onion',
    url: whiteOnionImg,
  },
  {
    ingredient: '1/2 green bell pepper',
    url: greenBellPepperImg,
  },
  {
    ingredient: '1 tablespoon mustard',
    url: mustardImg,
  },
  {
    ingredient: '2 tablespoons ketchup',
    url: ketchupImg,
  },
];

export const cornBreadDressingData = [
  {
    ingredient: '2 boxes of jiffy corn-muffin mix',
    url: cornMuffinMixImg,
  },
  {
    ingredient: '1 box of turkey stovetop stuffing',
    url: stoveTopStuffingImg,
  },
  {
    ingredient: '6 celery stalks',
    url: celeryStalksImg,
  },
  {
    ingredient: '1 large onion',
    url: whiteOnionImg,
  },
  {
    ingredient: '3 tablespoons rubbed sage',
    url: rubbedSageImg,
  },
  {
    ingredient: '2 eggs',
    url: eggsImg,
  },
  {
    ingredient: '48 ounces of chicken broth',
    url: cknBrothImg,
  },
  {
    ingredient: '1/2 teaspoon salt',
    url: saltImg,
  },
  {
    ingredient: '1/2 teaspoon pepper',
    url: blackPepperImg,
  },
];

export const toscanaSoupData = [
  {
    ingredient: '8 medium sized potatoes',
    url: potatoesImg,
  },
  {
    ingredient: '1 lbs italian sausage',
    url: italianSausageImg,
  },
  {
    ingredient: '1 medium white or yellow onion',
    url: whiteOnionImg,
  },
  {
    ingredient: '3 cloves of garlic',
    url: garlicClovesImg,
  },
  {
    ingredient: '3 cups kale',
    url: kaleImg,
  },
  {
    ingredient: '1 pint of heavy cream',
    url: heavyCreamImg,
  },
  {
    ingredient: '1/2 teaspoon salt',
    url: saltImg,
  },
  {
    ingredient: '1/2 teaspoon pepper',
    url: blackPepperImg,
  },
  {
    ingredient: '1/2 teaspoon italian seasoning',
    url: italianSeasingImg,
  },
  {
    ingredient: '1/2 stick of butter',
    url: butterImg,
  },
  {
    ingredient: '32 ounces of chicken broth',
    url: cknBrothImg,
  },
  {
    ingredient: 'bacon bits',
    url: baconBitsImg,
  },
];

export const creamPotatoesData = [
  {
    ingredient: '8 medium sized potatoes',
    url: potatoesImg,
  },
  { ingredient: '1 cup milk', url: milkImg },
  { ingredient: '1 stick butter', url: butterImg },
  {
    ingredient: '1/2 teaspoon pepper',
    url: blackPepperImg,
  },
];

export const macAndCheeseData = [
  { ingredient: 'elbow macoroni', url: elbowMacImg },
  { ingredient: '1/2 stick butter', url: butterImg },
  { ingredient: 'cheese', url: './hello-world' },
];

export const recipes = [
  {
    name: 'meat loaf',
    category: 'entrees',
    ingredientData: meatLoafData,
    instructions:
      'Preheat oven to 400. Chop onions and bell peppers finely. Mix everyghing together in with the meat. Put in cassarole dish and bake on 400 for 45 to 50 mins',
    img: meatLoafImg,
    time: '1 hour',
    calories: 450,
    serves: '6-8',
    id: crypto.randomUUID(),
  },
  {
    name: 'corn bread dressing',
    category: 'entrees',
    ingredientData: cornBreadDressingData,
    instructions:
      'Bake cornbread according to the instructions on box. Let cornbread cool. Crumble up cornbread in a large bowl along with stuffing mix. Chop onions and celery into very fine pieces. Add all ingredients, including the chicken broth. Mix well, let sit overnight. Bake in oven at 400 degrees, for 70 mins in an iron skillet.',
    img: cornBreadDressingImg,
    time: '1 hour',
    calories: 450,
    serves: '6-8',
    id: crypto.randomUUID(),
  },
  {
    name: 'toscana soup',
    category: 'entrees',
    ingredientData: toscanaSoupData,
    instructions:
      'In a large pot add one half stick of butter, one finely chopped onion, and 3 cloves garlic finely chopped. On low heat cook for 10 to 12 mins. Then add one pound of Italian sausage and brown the meat until done. Then add the chicken broth and potatoes. Bring to a boil, reduce heat, and simmer until potatoes are done. Add kale and heavy cream. Simmer another 10 to 12 mins. Add bacon bits and cheese to each bowl served.',
    img: toscanaSoupImg,
    time: '1 hour',
    calories: 450,
    serves: '6-8',
    id: crypto.randomUUID(),
  },
  {
    name: 'cream potatoes',
    category: 'sides',
    ingredientData: creamPotatoesData,
    instructions:
      'Peal and dice potatoes. Boil until fork tender. Drain and put back into pot. Mash with potatoe masher. Add milk, butter salt, and pepper. Mix with mixer until well blended',
    img: creamPotatoesImg,
    time: '1 hour',
    calories: 450,
    serves: '6-8',
    id: crypto.randomUUID(),
  },
  {
    name: 'mac and cheese',
    category: 'sides',
    ingredientData: macAndCheeseData,
    instructions: 'Heat noodles and add cheese, butter, and pepper',
    img: macAndCheeseImg,
    time: '1 hour',
    calories: 450,
    serves: '6-8',
    id: crypto.randomUUID(),
  },
];

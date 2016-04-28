# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Movie.create([
            {title: 'Bob', movie_id: 22, movie_url:'anything.jpg'},
            {title: 'Tina', movie_id: 24, movie_url:'otherthing.jpg'}
              ])

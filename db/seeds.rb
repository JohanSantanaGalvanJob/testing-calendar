# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

    event2 = Event.create(
        title: "Curso de Salsa",
        description: "Curso de salsa en la terraza Kopa",
        date: Date.new(2022,10,30),
        starting_hour:"18:00",
        finished_hour:"22:00",
        photo:"rgijreoigjig")

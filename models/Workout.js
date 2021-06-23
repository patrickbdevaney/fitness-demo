const { Model, DataTypes } = require('sequelize');
/* const bcrypt = require('bcrypt'); */
const sequelize = require('../config/connection');

class Workout extends Model {}

Workout.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        //To indicate one of the exercise types we are working with, push, pull, legs, or cardio
        muscletype: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },

        

        currentweek: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },

        //by default I'm setting it up so each muscle type will have five different workouts. I made allowNull true on four of them so the user can choose the number of exercises but not five because then they are not doing any.
        exercise1: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        //the number of repetitions the user would do. Initially, this can come from multiplying the previous week's repetitions by 1.1 or if the first week, a constant like 50 for squats.
        exercise1current: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },

        exercise2: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },

        exercise2current: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: false,
        },

        exercise3: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },

        exercise3current: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: false,
        },

        exercise4: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },

        exercise4current: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: false,
        },

        exercise5: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: false,
        },

        exercise5current: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: false,
        }},

    {
    
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Workout',
        
    });

module.exports = Workout;
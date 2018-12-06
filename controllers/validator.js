/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const {body, param, validationResult} = require('express-validator/check');

module.exports={
    validate(method) {
        switch (method) {
            case 'storeDatas':
            {
                return [
                    body('date', "name doesn't exist ").exists(),
                    body('value', "type doesn't exist").exists(),
                    body('type', "need to be an array like {'humidité'}").isArray(),
                    param('sensorId', "sensorId doesn't exist").isInt(),
                ]
            }
            case 'retrieveDatas':
            {
                return [
                    param('sensorId', "sensorId need to be an integer").isInt()
                ]
            }
            case 'updateDatas':
            {
                return [
                    param('id','data_id need to be an integer').isInt(),
                    param('sensorId', "sensorId need to be an integer").isInt(),
                ]
            }
            case 'createSensor':
            {
                return [
                    body('name', "name doesn't exist ").exists(),
                    body('type', "type doesn't exist").exists(),
                    body('type', "need to be an array like {'humidité'}").isArray(),
                    param('stationId', "stationId doesn't exist").isInt(),
                    body('state', 'need to be in enabled or disabled or broken]').optional().isIn('enabled', 'disabled', 'broken')
                ]
            }
            case 'retrieveSensor':
            {
                return [
                    param('stationId', "stationId need to be an integer").isInt(),
                    param('sensorId', "sensorId need to be an integer").isInt()
                ]
            }
            case 'listSensorStation':
            {
                return [
                    param('stationId', "stationId need to be an integer").isInt(),
                ]
            }
            case 'createStation':
            {
                return [
                    body('name', "name doesn't exist ").exists(),
                    body('frequency', "frequency doesn't exist").exists(),
                    body('position', "position doesn't exist").exists(),
                    body('ipAdress', "ipAdress doesn't exist").exists()
                ]
            }
            case 'retrieveStation':
            {
                return [
                    param('stationId', "stationId need to be an integer").isInt(),
                ]
            }
        }
    }
};
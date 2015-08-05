var PoguesDispatcher = require('../dispatchers/pogues-dispatcher');
var PoguesConstants = require('../constants/pogues-constants');
var Logger = require('../logger/logger');

var logger = new Logger('PoguesActions', 'Actions');

var PoguesActions = {
  setLanguage: function (language) {
    logger.info('Set language to: ', language);
    PoguesDispatcher.handleViewAction({
      actionType: PoguesConstants.ActionTypes.LANGUAGE_CHANGED,
      language: language
    });
  },
  // Questionnaire list loaded or not from the server
  receiveQuestionnaireList: function(questionnaires) {
    logger.info('Receive questionnaire list');
    PoguesDispatcher.handleServerAction({
      actionType: PoguesConstants.ActionTypes.RECEIVE_QUESTIONNAIRE_LIST,
      questionnaires: questionnaires
    });
  },
  getQuestionnaireList: function () {
    logger.info('Get questionnaire list');
    PoguesDispatcher.handleViewAction({
      actionType: PoguesConstants.ActionTypes.LOAD_QUESTIONNAIRE_LIST
    })

  },
  getQuestionnaireListFailed: function(error) {
    PoguesDispatcher.handleServerAction({
      actionType: PoguesConstants.ActionTypes.QUESTIONNAIRE_LIST_LOADING_FAILED,
      error: error
    });
  },
  // Questionnaire loaded or not from the server
  receiveQuestionnaire: function(questionnaire) {
    PoguesDispatcher.handleServerAction({
      actionType: PoguesConstants.ActionTypes.RECEIVE_QUESTIONNAIRE,
      questionnaire: questionnaire
    });
  },
  getQuestionnaireFailed: function(error) {
    PoguesDispatcher.handleServerAction({
      actionType: PoguesConstants.ActionTypes.QUESTIONNAIRE_LOADING_FAILED,
      error: error
    });
  },
  receiveNewIdFromServer: function(oldId, newId) {
    PoguesDispatcher.handleServerAction({
      actionType: PoguesConstants.ActionTypes.RECEIVE_NEW_ID_FROM_SERVER,
      newId: newId,
      oldId: oldId
    });
  },
  // questionnaire-list-store will ask the server for an id
  createQuestionnaire: function(questionnaire) {
    PoguesDispatcher.handleViewAction({
      actionType: PoguesConstants.ActionTypes.CREATE_QUESTIONNAIRE,
      questionnaire: questionnaire
    });
  },
  // posts the questionnaire on the server which returns a new id
  // questionnaire list store will take care of asking the server
  getQuestionnaire: function() {
    PoguesDispatcher.handleServerAction({
      actionType: PoguesConstants.ActionType.GET_QUESTIONNAIRE
    })

  },
  // Questionnaire selected in questionnaire picker or newly created
  // questionnaire (after create questionnaire)
  selectQuestionnaire: function(id) {
    PoguesDispatcher.handleViewAction({
      actionType: PoguesConstants.ActionTypes.SELECT_QUESTIONNAIRE,
      id: id
    });
    PoguesActions.switchToQuestionnaire();
  },
  // A Component is added with the GenericInput (spec is {sequence, depth, text})
  addComponent: function(spec) {
    PoguesDispatcher.handleViewAction({
      actionType: PoguesConstants.ActionTypes.ADD_COMPONENT,
      spec: spec
    });
  },
  // A Component is made editable
  editComponent: function(id) {
    PoguesDispatcher.handleViewAction({
      actionType: PoguesConstants.ActionTypes.EDIT_COMPONENT,
      id : id
    });
  },
  filterComponents: function(filter) {
    logger.info('Filter components action sent to dispatcher with value: ' + filter);
    PoguesDispatcher.handleViewAction({
      actionType: PoguesConstants.ActionTypes.FILTER_COMPONENTS,
      filter: filter
    })
  },
  filterQuestionnaires: function(filter) {
    logger.info('Filter questionnaires action sent to dispatcher with value: ' + filter);
    PoguesDispatcher.handleViewAction({
      actionType: PoguesConstants.ActionTypes.FILTER_QUESTIONNAIRES,
      filter: filter
    })
  },
  saveQuestionnaire: function(questionnaire) {
    PoguesDispatcher.handleServerAction({
      actionType: PoguesConstants.ActionTypes.SAVE_QUESTIONNAIRE,
      questionnaire: questionnaire
    });
  },
  switchToQuestionnaire: function(id) {
    PoguesDispatcher.handleViewAction({
      actionType: PoguesConstants.ActionTypes.SWITCH_VIEW_QUESTIONNAIRE,
      idQuestionnaire: id
    })
  },
  switchToPicker: function() {
    PoguesDispatcher.handleViewAction({
      actionType: PoguesConstants.ActionTypes.SWITCH_VIEW_PICKER
    })
  },
  switchToConfig: function() {
    PoguesDispatcher.handleViewAction({
      actionType: PoguesConstants.ActionTypes.SWITCH_VIEW_CONFIG
    })
  },
  // Edit the current questionnaire prop giving the prop key and the new value
  editQuestionnaire: function(key, value) {
    logger.info('Edit questionnaire with key/value: ' + key + ' - ' + value);
    PoguesDispatcher.handleViewAction({
      actionType: PoguesConstants.ActionTypes.EDIT_QUESTIONNAIRE,
      k : key,
      v : value
    });
  },
  publishQuestionnaire: function(questionnaire) {
    logger.info('Publish questionnaire: ', questionnaire);
    PoguesDispatcher.handleViewAction({
      actionType: PoguesConstants.ActionTypes.PUBLISH_QUESTIONNAIRE,
      questionnaire: questionnaire
    });
  },
  getPublicationURL: function(url) {
    logger.info('Push publication URL to the interface: ', url);
    PoguesDispatcher.handleViewAction({
      actionType: PoguesConstants.ActionTypes.GET_PUBLICATION_URL,
      url: url
    });
  },
  createCodeList: function(codeList) {
    logger.info('Create code list action', codeList);
    PoguesDispatcher.handleViewAction({
      actionType: PoguesConstants.ActionTypes.CREATE_CODE_LIST,
      codeList: codeList
    });
  },
  addCodeListToQuestionnaire: function(codeList) {
    logger.info('Add code list action', codeList);
    PoguesDispatcher.handleViewAction({
      actionType: PoguesConstants.ActionTypes.ADD_CODE_LIST,
      codeList: codeList
    });
  }
};

module.exports = PoguesActions;

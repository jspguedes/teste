export const defaultConditionState = {
  id: undefined,
  label: undefined,
  condition: undefined,
};

function modelToState(model) {
  const { id, label, condition } = model;
  const conditionData = {
    id,
    label,
    condition,
  };

  return {
    ...defaultConditionState,
    ...conditionData,
  };
}

function stateToModel(state) {}

export default {
  modelToState,
  stateToModel,
};

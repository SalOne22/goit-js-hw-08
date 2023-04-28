import throttle from 'lodash.throttle';

const feedbackFormEl = document.querySelector('.feedback-form');

feedbackFormEl.addEventListener('input', throttle(updateFormInStorage, 500));
feedbackFormEl.addEventListener('submit', onFeedbackSubmit);

window.addEventListener('DOMContentLoaded', updateFormFromStorage);

const feedbackFormData = {
  email: '',
  message: '',
};

const FEEDBACK_FORM_STORAGE_KEY = 'feedback-form-state';

function updateFormInStorage(evt) {
  const target = evt.target;
  feedbackFormData[target.name] = target.value;
  saveToStorage(FEEDBACK_FORM_STORAGE_KEY, feedbackFormData);
}

function updateFormFromStorage() {
  const updatedData = loadFromStorage(FEEDBACK_FORM_STORAGE_KEY);

  if (updatedData === undefined) return;

  const keys = Object.keys(updatedData);

  for (const key of keys) {
    const value = updatedData[key];
    feedbackFormData[key] = value;
    feedbackFormEl.elements[key].value = value;
  }
}

function onFeedbackSubmit(evt) {
  evt.preventDefault();
  evt.target.reset();

  saveToStorage(FEEDBACK_FORM_STORAGE_KEY, '');

  console.log(feedbackFormData);
}

function saveToStorage(key, obj) {
  try {
    const value = JSON.stringify(obj);
    localStorage.setItem(key, value);
  } catch (err) {
    console.error(err.message);
  }
}

function loadFromStorage(key) {
  try {
    const value = localStorage.getItem(key);
    const obj = JSON.parse(value);

    return obj === null ? undefined : obj;
  } catch (err) {
    console.error(err.message);

    return undefined;
  }
}

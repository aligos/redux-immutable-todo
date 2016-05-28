function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 17; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }return text;
}

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: makeid(),
      isDone: false,
      text: text
    }
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    payload: id
  }
}
function Account() {
  this.id;
  this.name;
  this.document;
  this.email;
  this.password;
}

class Account {
  constructor(id, name, document, email, password) {
    this.id = id;
    this.name = name;
    this.document = document;
    this.email = email;
    this.password = password;
  }
}

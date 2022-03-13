function factorialize(num) {
  if(!num)
    return 1
  else
    return num * factorialize(num - 1);
}

factorialize(5);

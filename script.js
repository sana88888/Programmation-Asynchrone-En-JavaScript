// Tâche 01 :Itération avec Async/Await

async function iterateWithAsyncAwait(arr) {
  console.log("start...");
  for (const value of arr) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(value);
  }
}

// Tâche 02 :En attente d'un appel

async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Data from an API" });
    }, 2000);
  });
}
async function awaitCall() {
  console.log("fetching data...");
  const data = await fetchData(true);
  console.log(data);
}
awaitCall();

// Tâche 03 :

// Gestion des erreurs avec Async/Await

async function fetchData() {
  return new Promise((resolve, reject) => {
    if (test) {
      setTimeout(() => {
        resolve({ data: "Data from an API" });
      }, 2000);
    } else {
      setTimeout(() => {
        reject({ error: "somethin went wrong" });
      }, 2000);
    }
  });
}
async function awaitCall() {
  try {
    console.log("fetching data...");
    const data = await fetchData(false);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
awaitCall();

// Chaînage Async/Await

async function asyncFn1() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
    console.log("Async Function 2");
  });
}

async function asyncFn2() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
    console.log("Async Function 2");
  });
}

async function asyncFn3() {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
    console.log("Async Function 3");
  });
}
async function chainedAsyncFunctions() {
  console.log("Start...");
  await asyncFn1();
  await asyncFn2();
  await asyncFn3();
  console.log("End..");
}
chainedAsyncFunctions();

// Tâche 04 :En attente de demandes simultanées

async function fetchApi1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Data from an API 1" });
    }, 2000);
  });
}
async function fetchApi2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Data from an API 2" });
    }, 4000);
  });
}
async function concurrentRequests() {
  console.log("Starting ....");
  const [result1, result2] = await Promise.all([fetchApi1(), fetchApi2()]);
  console.log("Fetchi api1 : ", result1);
  console.log("Fetchi api2 : ", result2);
  console.log("End");
}
concurrentRequests();

// Tâche 05 :En attente d'appels parallèles

async function fetchData(url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: ` Data from $ {url}` });
    }, 2000);
  });
}

async function parallelCalls(urls) {
  let promises = urls.map((url) => fetchData(url));
  responses = await Promise.all(promises);

  responses.forEach((response) => {
    console.log(response);
  });
}

let arr = ["https://exemple1.com/", "https://exemple2.com/"];
parallelCalls(arr);

import React from "react";

const Blogs = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="shadow-lg p-6 rounded-full text-center">
        <h2 className="text-center md:text-left">
          <b>Question:</b> Difference between javascript and nodejs.
        </h2>
        <p className="w-full p-4  text-slate-500 text-justify">
          JavaScript is a programming language.That runs in any browser
          JavaScript Engine.And Node JS is a run time environment for JavaScript
          programming language.It requires libraries that can easily be accessed
          from JavaScript programming for better use.
        </p>
      </div>

      <div className="shadow-lg p-6 rounded-full text-center my-4">
        <h2 className="text-center md:text-left">
          <b>Question:</b> When should you use nodejs and when should you use
          mongodb?
        </h2>
        <p className="w-full p-4  text-slate-500 text-justify">
          We will use node js when we want to write a program for the server. We
          can process data through node js. This means that we use node js for
          how to send data to the database and how to show us the server's
          data.And We will use Mongodb if your application needs the ability to
          continuously store data and update and delete that data.
        </p>
      </div>

      <div className="shadow-lg p-6 rounded-full text-center my-4">
        <h2 className="text-center md:text-left">
          <b>Question:</b> Differences between sql and nosql databases.
        </h2>
        <p className="w-full p-4 text-sm md:text-md  text-slate-500 text-justify">
          <b>SQL: </b>SQL stands for Structured Query Language also known as a
          relational database.SQL lets you access and manipulate databases.there
          are many SQL database . Such as MS-SQL,Oracle Database,Access, Ingres,
          PostgreSQL, Sybase, and SQLite.
          <br></br>
          <b>NoSQL: </b>NoSQL databases store data in documents rather than
          relational tables.A NoSQL database provides a mechanism for data
          storage and retrieval that is modeled in other ways than the tabular
          relationships used in relational databases.There are also many NoSQL
          database.Such as Mongodb,Redis,InfinityDB,MariaDB etc.
        </p>
      </div>

      <div className="shadow-lg p-6 rounded-full text-center my-4">
        <h2 className="text-center md:text-left">
          <b>Question:</b> What is the purpose of jwt and how does it work?
        </h2>
        <p className="w-full p-4  text-slate-500 text-justify">
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server.JWTs can be
          signed using a secret or a public / private key pair using RSA or
          ECDSA.A JWT is a Base64URL encoded string, divided into three
          sections, bounded by periods.
        </p>
      </div>
    </div>
  );
};

export default Blogs;

import Image from "next/image";
import bg from "../public/pytest.png"



export default function Home() {
  return (

    <div className=" ">
      <br/>
    	<div className=" max-w-6xl m-auto mt-20">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center"> 
            Ensuring that all code and models meet quality standards before it's deployed.
          </h1>
          <p className="mt-6 text-lg text-slate-400 text-center max-w-3xl mx-auto ">
            We will use Pytest for testing our code. It's Very easy to start with because of its simple and easy syntax and it's Open source.
            {/* Unit testing helps identify all kinds of issues with the application or software at a very early stage. 
            Developers can then work on those issues first before progressing any further. 
            The main advantage of this is when the issues are resolved at an early stage, no other 
            part of the software is impacted. This leads to increased efficiency, reduced downtime, and reduced
            costs that would otherwise arise as a result of the whole design process stalling.
            For our case, we will use a simple testing framework in Python programming language: pytest. 
            See below how to install it. */}
          </p>
      </div>

      {/*  */}

      <div className="relative sm:mt-10 lg:mt-32 blur duration-500">
        <Image src={bg} layout="fill" objectFit="cover" />
        <div className="w-full relative h-96" >
        </div>
      </div>
      

      

          {/* ----------------------------------------------------------------------------- */}
      <div className="">
          <div className=" max-w-6xl m-auto mt-48">
              <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center"> 
                Unit testing with pytest
              </h1>
              <div className="mt-10 gap-40 flex justify-center mb-10">
                  <div className="max-w-xl">
                      <p className="mt-6 text-xl text-white text-center max-w-6xl mx-auto ">
                        What is Pytest ?
                      </p>
                      <p className="mt-6 text-lg text-slate-500 text-center max-w-6xl mx-auto ">
                          PyTest is a testing framework that allows users to write test codes using Python 
                          programming language. It helps you to write simple and scalable test cases for 
                          databases, APIs, or UI. PyTest is mainly used for writing tests for APIs. 
                          It helps to write tests from simple unit tests to complex functional tests.
                      </p>
                  </div>
                  <div className="max-w-xl">
                      <p className="mt-6 text-xl text-white text-center max-w-6xl mx-auto ">
                        What are the requirements ?
                      </p>
                      <p className="mt-6 text-lg text-slate-500 text-center max-w-6xl mx-auto ">
                          Pytest require Python to be installed. For this tutorial, we used Python 3.7.10
                          And also you can use Pytest on a collaborative platform like Google Colab.
                          We prefer you to use it locally on your machine, by this way you will be 
                          able to push directly the code you tested to DagsHub.
                      </p>
                  </div>
                  <div className="max-w-xl">
                      <p className="mt-6 text-xl text-white text-center max-w-6xl mx-auto ">
                        Some of the advantages of pytest
                      </p>
                      <p className="mt-6 text-lg text-slate-500 text-center max-w-6xl mx-auto ">
                        Very easy to start with because of its simple and easy syntax,
                        automatically detect tests, it is Open source and it is very easy to install.
                        See below how to install pytest.
                      </p>
                  </div>
              </div>
             

              {/* ---------------------------------------------------------------------------------- */}
              <div className="w-2/5 rounded-xl border border-[#282E44] bg-[#121635] mt-20 mx-auto mb-10">
                  <div className="h-7 bg-[#121635] rounded-t-xl border border-[#282E44]">
                      <div className="flex justify-start gap-1 mt-2 ml-2">
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                      </div>
                  </div>
                  <div className="h-10 border-gray-400">
                      <h1 className="text-[#5B9CBF] py-2 ml-10 font-mono">
                        pip install pytest
                      </h1>
                  </div>
              </div>
              <br/>
              {/* ---------------------------------------------------------------------------------- */}
          </div>

      </div>

      <div className=" bg-[#121635]">
          <br/>

          <h1 className="text-slate-400 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center"> 
            Here we go!
          </h1>

          {/* ----------------------------------------A----------------------------------------- */}
          <p className="text-blue-500 font-semibold text-2xl sm:text-xl lg:text-3xl tracking-tight text-center mt-10"> 
            a. Test a simple function without parameter
            <p className="text-gray-500 font-mono text-lg tracking-tight text-center"> 
              The logic with pytest, we should add test_ to the name of function we want to test.
            </p>
          </p>

          <div className=" gap-10 flex justify-center bg-[#121635]">

              <div className="w-2/5 rounded-xl border border-[#282E44] bg-slate-900 mt-10">
                  <div className="h-7 bg-slate-900 rounded-t-xl border border-[#282E44]">
                      <div className="flex justify-start gap-1 mt-2 ml-2">
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                      </div>
                  </div>
                  <div className=" border-gray-400 overscroll-x-auto">
                        <p className="font-mono text-blue-400 ml-0">def add_a_b():</p>
                        <p className="font-mono text-slate-400 ml-10">a = 2</p>
                        <p className="font-mono text-slate-400 ml-10">b = 3</p>
                        <p className="font-mono text-green-400 ml-10">return a + b</p>
                  </div>
              </div>

              <div className="w-2/5 rounded-xl border border-[#282E44] bg-slate-900 mt-10">
                  <div className="h-7 bg-slate-900 rounded-t-xl border border-[#282E44]">
                      <div className="flex justify-start gap-1 mt-2 ml-2">
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                      </div>
                  </div>
                  <div className=" border-gray-400">
                        <p className="font-mono text-blue-400 ml-0">def test_add_a_b():</p>
                        <p className="font-mono text-slate-400 ml-10">result = add_a_b()</p>
                        <p className="font-mono text-slate-400 ml-10">expected = 5</p>
                        <p className="font-mono text-red-400 ml-10">assert result == expected , "Not equal"</p>
                  </div>
              </div>
          </div>
          {/* ---------------------------------------------------------------------------------- */}
          {/* --------------------------------------B------------------------------------------- */}
          <p className="text-purple-500 font-semibold text-2xl sm:text-xl lg:text-3xl tracking-tight text-center mt-20"> 
            b. Test a function with parameter(s)
            <p className="text-gray-500 font-mono text-lg tracking-tight text-center"> 
              Now we will take parameters to testing, we will test the output type, and the output value. 
              <br/>
              There is no one way to test, we just apply the logic that come in your mind.
            </p>
          </p>

          <div className=" gap-10 flex justify-center bg-[#121635]">

              <div className="w-2/5 rounded-xl border border-[#282E44] bg-slate-900 mt-10">
                  <div className="h-7 bg-slate-900 rounded-t-xl border border-[#282E44]">
                      <div className="flex justify-start gap-1 mt-2 ml-2">
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                      </div>
                  </div>
                  <div className=" border-gray-400 overscroll-x-auto">
                        <p className="font-mono text-purple-400 ml-0">def Sum(a, b, c):</p>
                        <br/>
                        <p className="font-mono text-slate-400 ml-10"># We return the sum directly</p>
                        <p className="font-mono text-slate-400 ml-10"></p>
                        <p className="font-mono text-green-400 ml-10">return a + b + c</p>
                  </div>
              </div>

              <div className="w-2/5 rounded-xl border border-[#282E44] bg-slate-900 mt-10">
                  <div className="h-7 bg-slate-900 rounded-t-xl border border-[#282E44]">
                      <div className="flex justify-start gap-1 mt-2 ml-2">
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                      </div>
                  </div>
                  <div className=" border-gray-400">
                        <p className="font-mono text-purple-400 ml-0">def test_Sum():</p>
                        <p className="font-mono text-slate-400 ml-10">a = 10</p>
                        <p className="font-mono text-slate-400 ml-10">b = 20</p>
                        <p className="font-mono text-slate-400 ml-10">c = 40</p>
                        <p className="font-mono text-slate-400 ml-10">result = Sum(a, b, c)</p>
                        <p className="font-mono text-red-400 ml-10">assert type(result) == int , "got different type"</p>
                        <p className="font-mono text-slate-400 ml-10">expected = 70</p>
                        <p className="font-mono text-red-400 ml-10">assert result == expected , "Not equal"</p>
                  </div>
              </div>
          </div>
          {/* ---------------------------------------------------------------------------------- */}
          {/* -------------------------------------C-------------------------------------------- */}
          <p className="text-pink-500 font-semibold text-2xl sm:text-xl lg:text-3xl tracking-tight text-center mt-20"> 
            c. Test a function which take object as parameter
            <p className="text-gray-500 font-mono text-lg tracking-tight text-center"> 
              Now we will take an object as parameter to testing, we will test the output type, and the output value. 
            </p>
          </p>

          <div className=" gap-10 flex justify-center bg-[#121635]">

              <div className="w-2/5 rounded-xl border border-[#282E44] bg-slate-900 mt-10">
                  <div className="h-7 bg-slate-900 rounded-t-xl border border-[#282E44]">
                      <div className="flex justify-start gap-1 mt-2 ml-2">
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                      </div>
                      <p className="-mt-4 ml-16 text-sm text-gray-400">Number.py</p>
                  </div>
                  <div className=" border-gray-400 overscroll-x-auto">
                        <p className="font-mono text-slate-400 ml-0">class Number:</p>
                        <p className="font-mono text-pink-400 ml-10">def __init__(self, number):</p>
                        <p className="font-mono text-slate-400 ml-20">self.n = number</p>
                        <p className="font-mono text-slate-400 ml-20">self.title = "This is a Number class"</p>
                        <br/>
                        <p className="font-mono text-pink-400 ml-10">def prime(self):</p>
                        <p className="font-mono text-slate-400 ml-20">state = True</p>
                        <p className="font-mono text-slate-400 ml-20">if self.n {"<="} 1 or self.n == 4:</p>
                        <p className="font-mono text-slate-400 ml-32">state = False</p>
                        <p className="font-mono text-slate-400 ml-20">elif self.n == 2 or self.n == 3:</p>
                        <p className="font-mono text-slate-400 ml-32">state = True</p>
                        <p className="font-mono text-slate-400 ml-20">else:</p>
                        <p className="font-mono text-slate-400 ml-32">for i in range(2, int(self.n/2)):</p>
                        <p className="font-mono text-slate-400 ml-44">if self.n % i == 0:</p>
                        <p className="font-mono text-slate-400 ml-52">state = False</p>
                        <p className="font-mono text-slate-400 ml-52">break</p>
                        <p className="font-mono text-green-400 ml-20">return state</p>
                  </div>
              </div>

              <div className="w-2/5 rounded-xl border border-[#282E44] bg-slate-900 mt-10">
                  <div className="h-7 bg-slate-900 rounded-t-xl border border-[#282E44]">
                      <div className="flex justify-start gap-1 mt-2 ml-2">
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                      </div>
                  </div>
                  <div className=" border-gray-400">
                        <p className="font-mono text-slate-400 ml-0">from Number import Number</p>
                        <br/>
                        <p className="font-mono text-pink-400 ml-0">def test_Number():</p>
                        <p className="font-mono text-slate-400 ml-10">val = 888</p>
                        <p className="font-mono text-slate-400 ml-10">instance = Number(val)</p>
                        <p className="font-mono text-slate-400 ml-10">expected = Number</p>
                        <p className="font-mono text-red-400 ml-10">assert type(instance) == Number, "Did not got Number class"</p>
                        <p className="font-mono text-red-400 ml-10">assert instance.n == val, "different from 888"</p>
                        <br/>
                        <p className="font-mono text-pink-400 ml-0">def test_prime():</p>
                        <p className="font-mono text-slate-400 ml-10">values = [7, 1001]</p>
                        <p className="font-mono text-slate-400 ml-10">n0 = Number(values[0])</p>
                        <p className="font-mono text-slate-400 ml-10">n1 = Number(values[1])</p>
                        <br/>
                        <p className="font-mono text-slate-400 ml-10">result0 = n0.prime()</p>
                        <p className="font-mono text-slate-400 ml-10">result1 = n1.prime()</p>
                        <br/>
                        <p className="font-mono text-slate-400 ml-10">expected0 = True</p>
                        <p className="font-mono text-slate-400 ml-10">expected1 = False</p>
                        <br/>
                        <p className="font-mono text-red-400 ml-10">assert type(result0) == bool , "got different type"</p>
                        <p className="font-mono text-red-400 ml-10">assert type(result1) == bool , "got different type"</p>
                        <br/>
                        <p className="font-mono text-red-400 ml-10">assert result0 == expected0 , "Error value"</p>
                        <p className="font-mono text-red-400 ml-10">assert result1 == expected1 , "Error value"</p>
                  </div>
              </div>
          </div>
          {/* ---------------------------------------------------------------------------------- */}

          {/* -----------------------------------D---------------------------------------------- */}
          <p className="text-amber-500 font-semibold text-2xl sm:text-xl lg:text-3xl tracking-tight text-center mt-20"> 
            d. Test a function with @pytest.mark.parametrize
            <p className="text-gray-500 font-mono text-lg tracking-tight flex text-center max-w-6xl ml-auto mr-auto"> 
              This allow you to control the output while having a possiblity to give inputs.
              Here we will control the models size with expected size. The syntax of that decorator, 
              is @pytest.mark.parametrize("val,expected", [(1,2)]), you may add 'exception' after 'expected' to raise Error.
              The tuple (1, 2) is [val,expected] value resp. 
            </p>
          </p>
          
          <div className=" gap-10 flex justify-center bg-[#121635]">

              <div className="w-2/5 rounded-xl border border-[#282E44] bg-slate-900 mt-10">
                  <div className="h-7 bg-slate-900 rounded-t-xl border border-[#282E44]">
                      <div className="flex justify-start gap-1 mt-2 ml-2">
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                      </div>
                  </div>
                  <div className=" border-gray-400 overscroll-x-auto">
                        <p className="font-mono text-slate-400 ml-0 mb-5">import random</p>
                        <p className="font-mono text-amber-400 ml-0">def get_random_models(n):</p>
                        <br/>
                        <p className="font-mono text-slate-400 ml-10">models = ["cnn", "vgg16", "ssd", "yolov4", "yolov5"]</p>
                        <p className="font-mono text-slate-400 ml-10">_models = []</p>
                        <p className="font-mono text-slate-400 ml-10">_len = len(_models)</p>
                        <p className="font-mono text-slate-400 ml-10">while _len {"<"} n:</p>
                        <p className="font-mono text-slate-400 ml-20">model =  random.choice(models)</p>
                        <p className="font-mono text-slate-400 ml-20">if model not in _models:</p>
                        <p className="font-mono text-slate-400 ml-32">_models.append(model)</p>
                        <p className="font-mono text-green-400 ml-10">return _models</p>
                  </div>
              </div>

              <div className="w-2/5 rounded-xl border border-[#282E44] bg-slate-900 mt-10">
                  <div className="h-7 bg-slate-900 rounded-t-xl border border-[#282E44]">
                      <div className="flex justify-start gap-1 mt-2 ml-2">
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                      </div>
                  </div>
                  <div className=" border-gray-400">
                        <p className="font-mono text-slate-400 ml-0 mb-5">import pytest</p>
                        <p className="font-mono text-amber-400 ml-0">@pytest.mark.parametize(</p>
                        <p className="font-mono text-slate-400 ml-10">"number,expected,exception",</p>
                        <p className="font-mono text-slate-400 ml-10">[</p>
                        <p className="font-mono text-slate-400 ml-20">{"# wrong input number < 1"}</p>
                        <p className="font-mono text-slate-400 ml-20">(-1, None, ValueError),</p>
                        <p className="font-mono text-slate-400 ml-20">(0, 0, None),</p>
                        <p className="font-mono text-slate-400 ml-20">(1, 1, None),</p>
                        <p className="font-mono text-slate-400 ml-20">(2, 2, None),</p>
                        <p className="font-mono text-slate-400 ml-20">(3, 3, None),</p>
                        <p className="font-mono text-slate-400 ml-20">(8, None, ValueError),</p>
                        <p className="font-mono text-slate-400 ml-10">] )</p>
                        <p className="font-mono text-amber-400 ml-0">def test_get_random_models(number, expected, exception)</p>
                        <p className="font-mono text-slate-400 ml-10">all_models = ["cnn", "vgg16", "ssd", "yolov4", "yolov5"]</p>
                        <p className="font-mono text-slate-400 ml-10">picked_models = get_random_models(number)</p>
                        <p className="font-mono text-slate-400 ml-10">if exception:</p>
                        <p className="font-mono text-red-400 ml-20">pytest.raises(ValueError, match="input value must be withing 1 & 5")</p>
                        <p className="font-mono text-slate-400 ml-10">else:</p>
                        <p className="font-mono text-slate-400 ml-20">result = all([True if m in all_models else False for m in picked_models])</p>
                        <p className="font-mono text-red-400 ml-20">assert result, "Wrong model loaded or picked"</p>
                  </div>
              </div>
          </div>
          {/* ---------------------------------------------------------------------------------- */}
          {/* -------------------------------------E-------------------------------------------- */}
          <p className="text-sky-500 font-semibold text-2xl sm:text-xl lg:text-3xl tracking-tight text-center mt-20"> 
            e. Test a function with hypothesis decorator.
            <p className="text-gray-500 font-mono text-lg tracking-tight text-center"> 
              This give you possibility to wide range of input to test.
              <br/>
              You should install hypothesis.
            </p>
          </p>
          {/* ---------------------------------------------------------------------------------- */}
          <div className="w-2/5 rounded-xl border border-[#282E44] bg-slate-900 mx-auto ">
              <div className="h-7 bg-slate-900 rounded-t-xl border border-[#282E44]">
                  <div className="flex justify-start gap-1 mt-2 ml-2">
                      <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                      <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                  </div>
              </div>
              <div className="h-10 border-gray-400">
                  <h1 className="text-[#5B9CBF] py-2 ml-10 font-mono">
                    pip install hypothesis
                  </h1>
              </div>
          </div>

          <div className=" gap-10 flex justify-center bg-[#121635]">

              <div className="w-2/5 rounded-xl border border-[#282E44] bg-slate-900 mt-10">
                  <div className="h-7 bg-slate-900 rounded-t-xl border border-[#282E44]">
                      <div className="flex justify-start gap-1 mt-2 ml-2">
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                      </div>
                  </div>
                  <div className=" border-gray-400 overscroll-x-auto">
                        <p className="font-mono text-slate-400 ml-0 mb-5">import random</p>
                        <p className="font-mono text-sky-400 ml-0">def get_random_models(n):</p>
                        <br/>
                        <p className="font-mono text-slate-400 ml-10">models = ["cnn", "vgg16", "ssd", "yolov4", "yolov5"]</p>
                        <p className="font-mono text-slate-400 ml-10">_models = []</p>
                        <p className="font-mono text-slate-400 ml-10">_len = len(_models)</p>
                        <p className="font-mono text-slate-400 ml-10">while _len {"<"} n:</p>
                        <p className="font-mono text-slate-400 ml-20">model =  random.choice(models)</p>
                        <p className="font-mono text-slate-400 ml-20">if model not in _models:</p>
                        <p className="font-mono text-slate-400 ml-32">_models.append(model)</p>
                        <p className="font-mono text-green-400 ml-10">return _models</p>
                  </div>
              </div>

              <div className="w-2/5 rounded-xl border border-[#282E44] bg-slate-900 mt-10">
                  <div className="h-7 bg-slate-900 rounded-t-xl border border-[#282E44]">
                      <div className="flex justify-start gap-1 mt-2 ml-2">
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                          <div className="h-3 w-3 rounded-full bg-[#424D60]"></div>
                      </div>
                  </div>
                  <div className=" border-gray-400">
                        <p className="font-mono text-slate-400 ml-0">import pytest</p>
                        <p className="font-mono text-slate-400 ml-0 mb-5">from hypothesis import given, strategies as st</p>
                        <p className="font-mono text-sky-400 ml-0">@given(st.integers())</p>
                        <p className="font-mono text-sky-400 ml-0">def test_get_random_models(number)</p>
                        <p className="font-mono text-slate-400 ml-10">all_models = ["cnn", "vgg16", "ssd", "yolov4", "yolov5"]</p>
                        <p className="font-mono text-slate-400 ml-10">picked_models = get_random_models(number)</p>
                        <p className="font-mono text-slate-400 ml-10">{"if number > 0:"}</p>
                        <p className="font-mono text-slate-400 ml-20">result = all([True if m in all_models else False for m in picked_models])</p>
                        <p className="font-mono text-red-400 ml-20">assert result, "Wrong model loaded or picked"</p>
                        <p className="font-mono text-red-400 ml-20">assert len(picked_models) == number, "the length doesn't match"</p>
                        <p className="font-mono text-slate-400 ml-10">else:</p>
                        <p className="font-mono text-red-400 ml-20">pytest.raises(ValueError, match="input value must positive")</p>
                  </div>
              </div>
          </div>
          
          {/* ---------------------------------------------------------------------------------- */}


      </div>
      <br/>
      <p className="text-center font-mono text-slate-400 mt-20">Designed with love & the code is available</p>
      <a href="https://dagshub.com/bm777/ndu-pytest"><p className="text-center font-mono text-purple-400">@DagsHub</p></a>
      
      
    </div>
    
  )
}

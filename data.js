window.EXAM_DATA = [
  {
    "id": 1,
    "section": "AI 리터러시",
    "prompt": "AI 리터러시를 가장 적절하게 설명한 것은?",
    "choices": [
      "AI 서비스를 자주 사용하고 답변을 빠르게 복사하는 능력",
      "AI의 작동과 한계를 이해하고 결과를 검증하며 책임 있게 활용·설계하는 역량",
      "모델 이름과 출시 순서를 정확히 암기하는 능력",
      "프롬프트를 길게 작성하여 사람의 판단을 없애는 능력"
    ],
    "answer": 2,
    "explanation": "AI 리터러시는 사용 횟수가 아니라 이해·활용·검증·책임·설계를 포함하는 역량이다.",
    "answerText": "AI의 작동과 한계를 이해하고 결과를 검증하며 책임 있게 활용·설계하는 역량",
    "review": {
      "label": "AI 리터러시 / AI 리터러시",
      "url": "https://www.notion.so/5232fdb1414883b9ad80018f331ebaeb"
    }
  },
  {
    "id": 2,
    "section": "AI 리터러시",
    "prompt": "토큰과 컨텍스트 윈도에 관한 설명으로 옳은 것은?",
    "choices": [
      "토큰은 언어와 관계없이 항상 한 글자이다",
      "컨텍스트 윈도가 커지면 모든 입력을 같은 정확도로 활용한다",
      "컨텍스트에는 사용자 질문만 포함된다",
      "토큰 분할은 토크나이저에 따라 다르며, 컨텍스트 윈도는 한 번에 처리할 수 있는 범위이다"
    ],
    "answer": 4,
    "explanation": "토큰은 글자나 단어와 정확히 일치하지 않는다. 큰 컨텍스트에도 불필요한 정보가 많으면 중요한 조건이 희석될 수 있다.",
    "answerText": "토큰 분할은 토크나이저에 따라 다르며, 컨텍스트 윈도는 한 번에 처리할 수 있는 범위이다",
    "review": {
      "label": "AI 리터러시 / AI 리터러시",
      "url": "https://www.notion.so/5232fdb1414883b9ad80018f331ebaeb"
    }
  },
  {
    "id": 3,
    "section": "AI 리터러시",
    "prompt": "AI가 그럴듯한 논문 제목과 저자를 제시했지만 실제 자료에서 확인되지 않았다. 이 현상에 가장 가까운 것은?",
    "choices": [
      "모델 평가 완료",
      "토큰 언패킹",
      "의존성 충돌",
      "할루시네이션"
    ],
    "answer": 4,
    "explanation": "근거가 없거나 사실과 다른 내용을 그럴듯하게 생성하는 현상은 할루시네이션이다. 자연스러운 문장이 사실을 보증하지 않는다.",
    "answerText": "할루시네이션",
    "review": {
      "label": "AI 리터러시 / AI 리터러시",
      "url": "https://www.notion.so/5232fdb1414883b9ad80018f331ebaeb"
    }
  },
  {
    "id": 4,
    "section": "AI 리터러시",
    "prompt": "회사 문서 요약에 사용할 모델을 고르는 방법으로 가장 적절한 것은?",
    "choices": [
      "실제 작업의 성공·실패 기준을 정하고 같은 평가 데이터로 반복 측정한다",
      "서비스 이름만 보고 검색과 파일 처리 지원이 항상 같다고 가정한다",
      "한 번의 짧은 질문에 가장 긴 답을 낸 모델을 선택한다",
      "컨텍스트 윈도가 가장 큰 모델을 별도 검증 없이 선택한다"
    ],
    "answer": 1,
    "explanation": "모델 계열과 서비스 기능은 계속 변한다. 작업 기준을 정한 Evals와 현재 입력 유형·도구 지원 범위 확인이 필요하다.",
    "answerText": "실제 작업의 성공·실패 기준을 정하고 같은 평가 데이터로 반복 측정한다",
    "review": {
      "label": "AI 리터러시 / AI 리터러시",
      "url": "https://www.notion.so/5232fdb1414883b9ad80018f331ebaeb"
    }
  },
  {
    "id": 5,
    "section": "AI 리터러시",
    "prompt": "AI가 작성한 코드와 최신 제도 설명을 업무에 사용하려 한다. 검증에 해당하는 행동은?",
    "choices": [
      "설명이 자연스러우면 사실과 실행 여부를 모두 확인한 것으로 본다",
      "같은 모델이 같은 답을 두 번 하면 공식 출처 확인을 생략한다",
      "제도의 공식 근거와 날짜를 확인하고 코드를 실행하여 결과를 재현한다",
      "좋은 프롬프트를 썼으므로 확인되지 않은 부분도 확정 사실로 표시한다"
    ],
    "answer": 3,
    "explanation": "검증은 결과를 사용할 수 있게 만드는 기본 과정이다. 공식 근거와 실행 결과를 확인하고 확인하지 못한 내용은 구분해야 한다.",
    "answerText": "제도의 공식 근거와 날짜를 확인하고 코드를 실행하여 결과를 재현한다",
    "review": {
      "label": "AI 리터러시 / AI 리터러시",
      "url": "https://www.notion.so/5232fdb1414883b9ad80018f331ebaeb"
    }
  },
  {
    "id": 6,
    "section": "AI 리터러시",
    "prompt": "실제 시스템 상태를 바꾸는 AI 에이전트의 Auto-Healing 설계로 가장 적절한 것은?",
    "choices": [
      "실패 유형과 관계없이 성공할 때까지 같은 작업을 반복한다",
      "실패를 분류하고 안전한 범위에서 제한적으로 재시도하며 위험하거나 미해결인 작업은 사람에게 넘긴다",
      "하네스를 도입하면 사용자 승인과 복구 절차를 모두 제거한다",
      "실행 로그를 남기지 않아 민감한 실패를 감춘다"
    ],
    "answer": 2,
    "explanation": "Auto-Healing은 무조건 반복이 아니다. 행동 범위와 권한을 확인하고 승인 지점·실행 로그·복구 방법을 두어야 한다.",
    "answerText": "실패를 분류하고 안전한 범위에서 제한적으로 재시도하며 위험하거나 미해결인 작업은 사람에게 넘긴다",
    "review": {
      "label": "AI 리터러시 / AI 리터러시",
      "url": "https://www.notion.so/5232fdb1414883b9ad80018f331ebaeb"
    }
  },
  {
    "id": 7,
    "section": "Python 기초",
    "prompt": "VS Code의 Microsoft Python 확장과 Python 인터프리터의 관계로 옳은 것은?",
    "choices": [
      "확장은 편집·실행·디버깅 기능을 연결하지만 인터프리터를 대신 설치하지 않는다",
      "확장만 설치하면 모든 프로젝트에 Python 3.12 가상환경이 자동 생성된다",
      "인터프리터는 코드를 편집하고 확장이 소스 코드를 직접 실행한다",
      "확장을 설치하려면 기존 Python 환경을 모두 삭제해야 한다"
    ],
    "answer": 1,
    "explanation": "인터프리터가 .py 코드를 실행하며 VS Code 확장은 개발 기능을 연결한다. 수업에서는 uv로 Python과 가상환경을 준비한다.",
    "answerText": "확장은 편집·실행·디버깅 기능을 연결하지만 인터프리터를 대신 설치하지 않는다",
    "review": {
      "label": "Python 기초 / Python·VS Code 설치와 첫 실행",
      "url": "https://www.notion.so/1cf2fdb141488364ac63811500b24a50"
    }
  },
  {
    "id": 8,
    "section": "Python 기초",
    "prompt": "프로젝트의 .venv를 실수로 삭제했지만 pyproject.toml과 uv.lock은 남아 있다. 선언된 환경을 다시 맞추는 명령은?",
    "choices": [
      "uv python pin 3.12",
      "uv init --bare",
      "uv --version",
      "uv sync"
    ],
    "answer": 4,
    "explanation": "uv sync는 프로젝트 선언과 잠금 정보를 바탕으로 .venv를 생성·갱신한다. 이미 설정 파일이 있으므로 다시 초기화하지 않는다.",
    "answerText": "uv sync",
    "review": {
      "label": "Python 기초 / uv·venv로 가상환경 구성하기",
      "url": "https://www.notion.so/7072fdb1414883e9af9981fc81f65a8a"
    }
  },
  {
    "id": 9,
    "section": "Python 기초",
    "prompt": "터미널이 01_python_basic에 있고 파일은 01_basics/01_execution_order.py에 있다. 수업의 프로젝트 환경에서 이 파일을 실행하는 명령은?",
    "choices": [
      "uv run python 01_execution_order.py",
      "uv run python 01_basics/01_execution_order.py",
      "uv init 01_basics/01_execution_order.py",
      "python 01_python_basic/01_basics/01_execution_order.py"
    ],
    "answer": 2,
    "explanation": "상대 경로는 현재 터미널 위치를 기준으로 읽는다. 프로젝트 최상위에서 uv run과 하위 파일 경로를 사용한다.",
    "answerText": "uv run python 01_basics/01_execution_order.py",
    "review": {
      "label": "Python 기초 / Python 코드의 실행 순서와 오류 읽기",
      "url": "https://www.notion.so/2632fdb14148833d8fb08123298bde7b"
    }
  },
  {
    "id": 10,
    "section": "Python 기초",
    "prompt": "다음 코드의 출력은?\n\n```python\nraw = \" 90 \"\nminutes = int(raw.strip())\nprint(f\"{minutes / 60:.1f}\")\n```",
    "choices": [
      "90.0",
      "1",
      "1.5",
      "1.5시간"
    ],
    "answer": 3,
    "explanation": "공백 정리 후 정수 90을 만든다. 90 / 60은 1.5이며 소수점 한 자리 형식으로 1.5를 출력한다.",
    "answerText": "1.5",
    "review": {
      "label": "Python 기초 / 변수·자료형·입출력",
      "url": "https://www.notion.so/cc32fdb14148836ba5c901adfeaec184"
    }
  },
  {
    "id": 11,
    "section": "Python 기초",
    "prompt": "다음 코드 실행 뒤 result와 agents의 값으로 옳은 것은?\n\n```python\nagents = [\"검색\", \"분석\"]\nresult = agents.append(\"요약\")\n```",
    "choices": [
      "result와 agents는 모두 [\"검색\", \"분석\", \"요약\"]",
      "result는 \"요약\", agents는 [\"검색\", \"분석\"]",
      "result는 None, agents는 [\"검색\", \"분석\", \"요약\"]",
      "result는 3, agents는 [\"검색\", \"분석\", \"요약\"]"
    ],
    "answer": 3,
    "explanation": "append()는 원본 리스트에 항목 하나를 추가하며 반환값은 None이다.",
    "answerText": "result는 None, agents는 [\"검색\", \"분석\", \"요약\"]",
    "review": {
      "label": "Python 기초 / 컬렉션: list·tuple·dict·set",
      "url": "https://www.notion.so/3dc2fdb1414880a08b7acb4d3a3c7bc6"
    }
  },
  {
    "id": 12,
    "section": "Python 기초",
    "prompt": "다음 코드의 출력은?\n\n```python\ntotal = 0\nfor number in range(1, 5):\n    if number == 2:\n        continue\n    if number == 4:\n        break\n    total += number\nprint(total)\n```",
    "choices": [
      "4",
      "8",
      "3",
      "10"
    ],
    "answer": 1,
    "explanation": "2는 continue로 건너뛰고 4에서는 더하기 전에 종료하므로 1 + 3 = 4이다.",
    "answerText": "4",
    "review": {
      "label": "Python 기초 / 조건문·반복문",
      "url": "https://www.notion.so/3dc2fdb1414880c69f73f9f9f7dd9aff"
    }
  },
  {
    "id": 13,
    "section": "Python 기초",
    "prompt": "다음 코드의 출력은?\n\n```python\ndef show_price():\n    print(7000)\n\nvalue = show_price()\nprint(value)\n```",
    "choices": [
      "7000 다음 줄에 7000",
      "return이 없어 SyntaxError 발생",
      "None 다음 줄에 7000",
      "7000 다음 줄에 None"
    ],
    "answer": 4,
    "explanation": "print()는 화면에 값을 보여 줄 뿐 반환하지 않는다. 명시적인 return이 없는 함수의 반환값은 None이다.",
    "answerText": "7000 다음 줄에 None",
    "review": {
      "label": "Python 기초 / 함수·반환값·모듈·패키지",
      "url": "https://www.notion.so/3dc2fdb1414880d499d8e7f373f24aae"
    }
  },
  {
    "id": 14,
    "section": "Python 기초",
    "prompt": "다음 조건 때문에 status가 \"멈춤\"이어도 \"정상\"으로 처리된다. 허용 상태 세 개만 정확히 인정하는 수정은?\n\n```python\nif status == \"완료\" or \"진행 중\" or \"대기\":\n    print(\"정상\")\n```",
    "choices": [
      "if status == (\"완료\" or \"진행 중\" or \"대기\"):",
      "if status in [\"완료\", \"진행 중\", \"대기\"]:",
      "if status == \"완료\" and status == \"진행 중\" and status == \"대기\":",
      "if status != \"멈춤\":"
    ],
    "answer": 2,
    "explanation": "원래 조건은 비어 있지 않은 문자열 자체를 or로 연결해 참이 된다. in으로 허용 목록에 포함되는지 검사한다.",
    "answerText": "if status in [\"완료\", \"진행 중\", \"대기\"]:",
    "review": {
      "label": "Python 기초 / Codex로 작은 기능 구현·오류 수정·검증하기",
      "url": "https://www.notion.so/3dd2fdb14148803da427f9ef7251599e"
    }
  },
  {
    "id": 15,
    "section": "Python 기초",
    "prompt": "다음 코드의 출력은?\n\n```python\nclass Counter:\n    def __init__(self, start=0):\n        self.value = start\n    def increment(self):\n        self.value += 1\n\nfirst = Counter()\nsecond = Counter(10)\nfirst.increment()\nprint(first.value, second.value)\n```",
    "choices": [
      "1 10",
      "1 11",
      "10 10",
      "11 11"
    ],
    "answer": 1,
    "explanation": "self.value는 인스턴스 속성이므로 객체마다 따로 저장된다. first만 증가해 second는 10을 유지한다.",
    "answerText": "1 10",
    "review": {
      "label": "Python 기초 / 클래스·객체지향 프로그래밍",
      "url": "https://www.notion.so/3dd2fdb1414880c280cdd3b306efe91d"
    }
  },
  {
    "id": 16,
    "section": "Python 기초",
    "prompt": "다음 코드의 출력 순서로 옳은 것은?\n\n```python\ntry:\n    value = int(\"unknown\")\nexcept ValueError:\n    print(\"실패\")\nelse:\n    print(\"성공\")\nfinally:\n    print(\"종료\")\n```",
    "choices": [
      "성공 다음 줄에 종료",
      "실패만 출력",
      "실패 다음 줄에 종료",
      "종료 다음 줄에 실패"
    ],
    "answer": 3,
    "explanation": "ValueError가 발생해 except가 실행되고 else는 실행되지 않는다. finally는 예외와 관계없이 마지막에 실행된다.",
    "answerText": "실패 다음 줄에 종료",
    "review": {
      "label": "Python 기초 / 예외 처리",
      "url": "https://www.notion.so/3dd2fdb141488080bb80f788a9278d42"
    }
  },
  {
    "id": 17,
    "section": "Python 기초",
    "prompt": "다음 코드가 출력하는 두 값은?\n\n```python\nnumbers = [1, 2, 2, 3]\nselected = {n for n in numbers if n >= 2}\nsquares = {n: n * n for n in numbers}\nprint(len(selected), squares[2])\n```",
    "choices": [
      "3 4",
      "2 4",
      "2 2",
      "3 2"
    ],
    "answer": 2,
    "explanation": "집합은 중복 2를 제거해 {2, 3}을 만든다. 딕셔너리의 키 2의 값은 4이다.",
    "answerText": "2 4",
    "review": {
      "label": "Python 기초 / Python 심화 문법",
      "url": "https://www.notion.so/3dd2fdb141488074a76ee7347fe89100"
    }
  },
  {
    "id": 18,
    "section": "Python 기초",
    "prompt": "Codex가 리팩터링한 점수 판정 코드가 기존과 같은 출력을 냈다. 강의 기준에 따른 다음 판단으로 가장 적절한 것은?",
    "choices": [
      "출력이 같으므로 코드 구조도 반드시 개선되었다고 판단한다",
      "코드 줄 수만 줄었다면 새 복잡도는 검토하지 않는다",
      "새 클래스가 추가되었다면 문제 해결 여부와 무관하게 채택한다",
      "출력 유지와 별개로 선택한 문제가 줄었는지, 변경 코드를 이해하고 수정하기 쉬운지 살핀다"
    ],
    "answer": 4,
    "explanation": "출력 일치는 동작 유지의 근거다. 구조 개선은 구체적인 문제의 감소와 새로 생긴 복잡도를 따로 판단해야 한다.",
    "answerText": "출력 유지와 별개로 선택한 문제가 줄었는지, 변경 코드를 이해하고 수정하기 쉬운지 살핀다",
    "review": {
      "label": "Python 기초 / Codex로 코드 개선·리팩터링하기",
      "url": "https://www.notion.so/3dd2fdb1414880f0a7d0eadbcd2cab1c"
    }
  },
  {
    "id": 19,
    "section": "Python 기초",
    "prompt": "다음 코드의 출력은?\n\n```python\nvalues = (n * n for n in [1, 2, 3])\nprint(sum(values))\nprint(sum(values))\n```",
    "choices": [
      "14 다음 줄에 0",
      "0 다음 줄에 14",
      "14 다음 줄에 14",
      "제너레이터를 두 번 읽으면 반드시 ValueError 발생"
    ],
    "answer": 1,
    "explanation": "첫 sum()이 제너레이터의 값을 끝까지 사용한다. 두 번째에는 남은 값이 없어 합계 0이 된다.",
    "answerText": "14 다음 줄에 0",
    "review": {
      "label": "Python 기초 / Python 심화 문법",
      "url": "https://www.notion.so/3dd2fdb141488074a76ee7347fe89100"
    }
  },
  {
    "id": 20,
    "section": "Python 기초",
    "prompt": "delivery.py의 단독 테스트가 다른 파일에서 import될 때는 실행되지 않게 하려 한다. 테스트 코드를 감쌀 조건은?",
    "choices": [
      "if __name__ == \"delivery\":",
      "if __name__ == \"__main__\":",
      "if __init__ == \"__main__\":",
      "if __name__ == \"shop_tools.delivery\":"
    ],
    "answer": 2,
    "explanation": "직접 실행한 파일의 __name__은 \"__main__\"이다. 모듈로 가져오면 모듈 이름이므로 해당 블록은 실행되지 않는다.",
    "answerText": "if __name__ == \"__main__\":",
    "review": {
      "label": "Python 기초 / 함수·반환값·모듈·패키지",
      "url": "https://www.notion.so/3dc2fdb1414880d499d8e7f373f24aae"
    }
  },
  {
    "id": 21,
    "section": "Python 기초",
    "prompt": "문자열 작업 번호 여러 개를 처리한다. 하나의 번호가 정수로 변환되지 않아도 다음 번호를 계속 처리하려면 가장 적절한 구조는?",
    "choices": [
      "전체 반복문 바깥의 try에서 첫 오류만 잡는다",
      "변환 함수에서 모든 예외를 숨기고 무조건 0을 반환한다",
      "오류가 나면 반복문에서 즉시 break한다",
      "반복문 안에서 입력 하나의 변환을 try로 감싸고 ValueError를 처리한다"
    ],
    "answer": 4,
    "explanation": "입력 하나마다 예외를 처리해야 실패한 입력 뒤에도 반복을 계속할 수 있다. 오류를 무조건 숨기거나 임의의 기본값으로 바꾸지 않는다.",
    "answerText": "반복문 안에서 입력 하나의 변환을 try로 감싸고 ValueError를 처리한다",
    "review": {
      "label": "Python 기초 / 예외 처리",
      "url": "https://www.notion.so/3dd2fdb141488080bb80f788a9278d42"
    }
  },
  {
    "id": 22,
    "section": "Python 기초",
    "prompt": "기본 @dataclass로 정의한 다음 클래스에 대한 설명으로 옳은 것은?\n\n```python\nfrom dataclasses import dataclass\n@dataclass\nclass BookRecord:\n    title: str\n    author: str\n```",
    "choices": [
      "메서드를 추가할 수 없으므로 동작이 필요하면 반드시 dict로 바꾼다",
      "title에 정수를 넘기면 타입 힌트 때문에 생성 단계에서 항상 TypeError가 난다",
      "같은 클래스의 두 객체는 필드 값이 같으면 기본 == 비교가 True이고, 타입 힌트만으로 입력 자료형을 강제하지는 않는다",
      "서로 다른 객체라면 필드 값이 같아도 기본 == 비교가 항상 False이다"
    ],
    "answer": 3,
    "explanation": "dataclass는 기본 __init__·__repr__·__eq__를 만든다. 기본 값 비교는 필드에 기반하지만 타입 힌트는 자동 런타임 검증이 아니다.",
    "answerText": "같은 클래스의 두 객체는 필드 값이 같으면 기본 == 비교가 True이고, 타입 힌트만으로 입력 자료형을 강제하지는 않는다",
    "review": {
      "label": "Python 기초 / 클래스·객체지향 프로그래밍",
      "url": "https://www.notion.so/3dd2fdb1414880c280cdd3b306efe91d"
    }
  },
  {
    "id": 23,
    "section": "Git·GitHub",
    "prompt": "개인 연습 폴더에서 git init -b main을 실행한 직후 상태로 옳은 것은?",
    "choices": [
      "GitHub에 같은 이름의 저장소가 자동 생성된다",
      "현재 폴더에 .git 관리 정보가 생기지만 아직 커밋과 원격 연결은 없다",
      "첫 커밋과 origin 주소가 자동 생성된다",
      "현재 폴더의 모든 파일이 자동으로 커밋된다"
    ],
    "answer": 2,
    "explanation": "init은 로컬 저장소를 준비한다. -b main은 첫 브랜치 이름을 정하며 커밋이나 원격 저장소를 만들지 않는다.",
    "answerText": "현재 폴더에 .git 관리 정보가 생기지만 아직 커밋과 원격 연결은 없다",
    "review": {
      "label": "Git·GitHub / Git 설치와 개인 저장소",
      "url": "https://www.notion.so/23e2fdb141488336900701dee2021499"
    }
  },
  {
    "id": 24,
    "section": "Git·GitHub",
    "prompt": "추적 중인 파일을 500에서 800으로 수정해 git add한 뒤, 다시 900으로 수정하고 저장했다. 아직 재스테이징하거나 커밋하지 않았다. 다음 커밋의 후보인 800 변경을 확인하는 명령은?",
    "choices": [
      "git diff --cached",
      "git remote -v",
      "git log --oneline -1",
      "git diff"
    ],
    "answer": 1,
    "explanation": "git diff --cached는 스테이징된 500→800 변경을 보여 준다. 옵션 없는 git diff는 스테이징 이후 작업 폴더의 800→900 변경을 보여 준다.",
    "answerText": "git diff --cached",
    "review": {
      "label": "Git·GitHub / 변경 확인과 커밋",
      "url": "https://www.notion.so/ec82fdb1414883a4a9a801b998bc8d1c"
    }
  },
  {
    "id": 25,
    "section": "Git·GitHub",
    "prompt": "새 기능 브랜치에서 커밋한 뒤 main으로 돌아와 병합했다. 이후 git push -u origin main만 실행했다. 이에 대한 설명으로 옳은 것은?",
    "choices": [
      "모든 로컬 기능 브랜치 이름도 원격에 자동 생성된다",
      "origin을 처음 등록하는 것과 같은 동작이며 커밋은 전송되지 않는다",
      "main의 커밋을 전송하고 추적 관계를 설정하지만 기능 브랜치 이름은 별도 push 없이는 자동 전송되지 않는다",
      "병합에 사용한 기능 브랜치는 로컬에서도 자동 삭제된다"
    ],
    "answer": 3,
    "explanation": "push의 대상은 지정한 main이다. 병합된 커밋은 main을 통해 전송되지만 로컬 기능 브랜치 자체의 이름은 별도로 전송해야 한다.",
    "answerText": "main의 커밋을 전송하고 추적 관계를 설정하지만 기능 브랜치 이름은 별도 push 없이는 자동 전송되지 않는다",
    "review": {
      "label": "Git·GitHub / 브랜치와 개인 원격 저장소",
      "url": "https://www.notion.so/f872fdb14148835fa9d101ba8f3619e5"
    }
  },
  {
    "id": 26,
    "section": "Git·GitHub",
    "prompt": "README.md에서 \"Python 문서\"라는 글자를 클릭하면 https://docs.python.org/3/ 이 열리도록 하는 올바른 Markdown 문법은?",
    "choices": [
      "(Python 문서)[https://docs.python.org/3/]",
      "`Python 문서 https://docs.python.org/3/`",
      "**Python 문서(https://docs.python.org/3/)**",
      "[Python 문서](https://docs.python.org/3/)"
    ],
    "answer": 4,
    "explanation": "Markdown 링크는 [표시할 이름](주소) 형식이다. 강조나 인라인 코드는 링크 문법을 대신하지 않는다.",
    "answerText": "[Python 문서](https://docs.python.org/3/)",
    "review": {
      "label": "Git·GitHub / README와 Markdown으로 저장소 소개하기",
      "url": "https://www.notion.so/95d2fdb141488343a9e701b77996cb11"
    }
  },
  {
    "id": 27,
    "section": "Git·GitHub",
    "prompt": "수업 원본을 개인 계정으로 fork하고 그 fork를 PC에 clone했다. 올바른 위치 관계는?",
    "choices": [
      "fork는 PC 폴더, clone은 GitHub 원본을 뜻한다",
      "fork는 내 GitHub 계정의 연결된 복사본이고, clone은 로컬 복사본이며 origin은 clone한 내 fork를 가리킨다",
      "origin은 이름 때문에 반드시 수업 organization을 가리킨다",
      "clone하면 원본 저장소의 병합 권한도 자동으로 생긴다"
    ],
    "answer": 2,
    "explanation": "fork는 GitHub 계정에, clone은 PC에 복사본을 만든다. clone 시 origin은 사용한 원격 주소로 등록되므로 계정 소유자를 확인한다.",
    "answerText": "fork는 내 GitHub 계정의 연결된 복사본이고, clone은 로컬 복사본이며 origin은 clone한 내 fork를 가리킨다",
    "review": {
      "label": "Git·GitHub / 수업 저장소 Fork와 Clone",
      "url": "https://www.notion.so/4132fdb141488208b6f301cd7bedfc12"
    }
  },
  {
    "id": 28,
    "section": "Git·GitHub",
    "prompt": "수업 원본에 보내는 PR에 수정 요청을 받았다. 수정 사항을 기존 PR에 반영하는 방법은?",
    "choices": [
      "원래 PR을 승인하면 수정 파일이 자동 생성된다",
      "새 저장소를 만들고 수정 파일을 업로드한다",
      "base인 수업 원본 main에 로컬 커밋만 만들면 자동 반영된다",
      "기존 head 기능 브랜치에서 수정·실행·커밋한 뒤 같은 브랜치를 내 fork에 push한다"
    ],
    "answer": 4,
    "explanation": "같은 head 브랜치에 새 커밋을 push하면 기존 PR이 갱신된다. 승인은 검토 결과이며 원본 반영에는 병합이 필요하다.",
    "answerText": "기존 head 기능 브랜치에서 수정·실행·커밋한 뒤 같은 브랜치를 내 fork에 push한다",
    "review": {
      "label": "Git·GitHub / Pull Request와 코드 리뷰",
      "url": "https://www.notion.so/b822fdb141488383a78b81616415f878"
    }
  },
  {
    "id": 29,
    "section": "Git·GitHub",
    "prompt": "B의 기능 브랜치에서 충돌이 났다. Current는 return f\"{title}: 우선 확인\", Incoming은 return f\"[긴급] {title}: 먼저 처리\"이다. 두 요구사항을 모두 반영하는 해결은?",
    "choices": [
      "Current만 남겨 긴급 표시 요구사항도 충족했다고 본다",
      "두 return을 연달아 남기면 둘 다 실행되므로 Accept Both만 한다",
      "return f\"[긴급] {title}: 우선 확인\" 한 줄로 합치고 충돌 표식을 지운 뒤 실행 결과를 확인한다",
      "Incoming만 남겨 문구 변경 요구사항도 충족했다고 본다"
    ],
    "answer": 3,
    "explanation": "한쪽만 선택하면 요구사항 하나가 빠진다. return 두 줄을 남겨도 첫 return에서 함수가 끝나므로 두 의도를 한 줄로 합쳐 검증한다.",
    "answerText": "return f\"[긴급] {title}: 우선 확인\" 한 줄로 합치고 충돌 표식을 지운 뒤 실행 결과를 확인한다",
    "review": {
      "label": "Git·GitHub / 팀 협업과 충돌 해결",
      "url": "https://www.notion.so/b752fdb141488208bd0a01c2ec8ef6ff"
    }
  },
  {
    "id": 30,
    "section": "Git·GitHub",
    "prompt": "A의 PR이 병합된 후 B가 GitHub에서 자기 fork의 main을 Sync했다. B의 PC 기능 브랜치에 그 결과를 합치는 명령 순서로 옳은 것은?",
    "choices": [
      "git fetch origin → git merge origin/main",
      "git push origin main → git init -b main",
      "git remote add origin main → git diff --cached",
      "git commit -m \"Sync\" → git branch --show-current"
    ],
    "answer": 1,
    "explanation": "Sync fork는 GitHub의 fork main을 갱신한다. fetch가 PC의 origin/main을 갱신하고 merge가 그 내용을 현재 기능 브랜치에 합친다.",
    "answerText": "git fetch origin → git merge origin/main",
    "review": {
      "label": "Git·GitHub / 팀 협업과 충돌 해결",
      "url": "https://www.notion.so/b752fdb141488208bd0a01c2ec8ef6ff"
    }
  },
  {
    "id": 31,
    "section": "FastAPI 기초",
    "prompt": "Gemini 연동 API에서 요청 모델 검증은 통과했으나 서버 프로세스에 GEMINI_API_KEY가 전달되지 않았다. 강의의 오류 구분에 맞는 응답은?",
    "choices": [
      "422: 클라이언트 프롬프트의 검증 실패",
      "503: 서버의 Gemini 설정이 준비되지 않음",
      "502: Gemini가 반환한 응답 처리 실패",
      "409: 같은 프롬프트의 중복 생성 충돌"
    ],
    "answer": 2,
    "explanation": "강의 예제는 서버 설정 누락을 503, 공급자 호출·응답 실패를 502, 입력 검증 실패를 422로 구분한다.",
    "answerText": "503: 서버의 Gemini 설정이 준비되지 않음",
    "review": {
      "label": "FastAPI 기초 / Gemini API 기초·FastAPI 연동",
      "url": "https://www.notion.so/3e82fdb1414880c290abfc19f4341faf"
    }
  },
  {
    "id": 32,
    "section": "FastAPI 기초",
    "prompt": "허용되지 않은 Origin의 웹 페이지에서 단순 GET을 보냈다. 서버 로그에는 200이 남았지만 자바스크립트는 응답 본문을 읽지 못했다. 가장 적절한 설명은?",
    "choices": [
      "CORS 위반이면 서버가 반드시 403을 보내므로 로그가 잘못되었다.",
      "같은 컴퓨터에서 실행한 페이지와 API는 포트가 달라도 같은 Origin이다.",
      "단순 GET도 항상 preflight를 통과해야 서버에 도착한다.",
      "서버가 응답했더라도 CORS 허용 헤더가 없으면 브라우저가 응답 공개를 제한할 수 있다."
    ],
    "answer": 4,
    "explanation": "CORS는 브라우저 자바스크립트의 응답 사용을 제어한다. 허용되지 않은 단순 요청은 서버에서 처리되어도 브라우저에서 응답을 읽지 못할 수 있다.",
    "answerText": "서버가 응답했더라도 CORS 허용 헤더가 없으면 브라우저가 응답 공개를 제한할 수 있다.",
    "review": {
      "label": "FastAPI 기초 / 예외·미들웨어·CORS",
      "url": "https://www.notion.so/5dd2fdb1414882ddae068199eb7b53fa"
    }
  },
  {
    "id": 33,
    "section": "FastAPI 기초",
    "prompt": "Pydantic v2에서 다음 모델을 FastAPI 요청 본문으로 사용한다. note 필드에 대한 설명으로 옳은 것은?\n\n```python\nclass Input(BaseModel):\n    note: str | None\n```",
    "choices": [
      "필드는 필수이지만 값으로 null을 보낼 수 있다.",
      "필드를 생략하면 자동으로 빈 문자열이 들어간다.",
      "필드는 선택 사항이지만 null은 허용하지 않는다.",
      "필드를 생략하거나 null을 보내면 모두 정수 0으로 변환된다."
    ],
    "answer": 1,
    "explanation": "str | None은 null 허용을 뜻한다. 기본값이 없으므로 필드 생략은 허용하지 않는다. 생략도 허용하려면 = None 등 기본값이 필요하다.",
    "answerText": "필드는 필수이지만 값으로 null을 보낼 수 있다.",
    "review": {
      "label": "FastAPI 기초 / Pydantic 요청 검증",
      "url": "https://www.notion.so/e352fdb14148830591b3018f12ec8fcc"
    }
  },
  {
    "id": 34,
    "section": "FastAPI 기초",
    "prompt": "다음 FastAPI 경로 설정에서 responses의 역할로 옳은 것은?\n\n```python\n@app.post(\"/generate\", responses={502: {\"description\": \"공급자 실패\"}})\n```",
    "choices": [
      "Gemini SDK에서 발생하는 모든 예외를 자동으로 502로 바꾼다.",
      "반환값과 무관하게 해당 경로의 성공 상태를 502로 고정한다.",
      "502 응답을 문서화하며 실제 오류 변환 코드는 별도로 필요하다.",
      "502 응답의 재시도 횟수와 대기 시간을 자동 설정한다."
    ],
    "answer": 3,
    "explanation": "responses는 추가 상태 코드·설명·오류 모델·예시를 OpenAPI에 설명한다. 실제 예외 처리나 HTTP 오류 응답 생성은 별도 코드가 담당한다.",
    "answerText": "502 응답을 문서화하며 실제 오류 변환 코드는 별도로 필요하다.",
    "review": {
      "label": "FastAPI 기초 / Swagger 문서·API 테스트",
      "url": "https://www.notion.so/6082fdb1414883f0bfd7810a953a778c"
    }
  },
  {
    "id": 35,
    "section": "FastAPI 기초",
    "prompt": "GET /runs/{run_id}의 경로 함수가 내부 딕셔너리를 반환하고 response_model=RunPublic을 지정했다. RunPublic에는 id, agent_name, status, result만 있다. 반환 딕셔너리에 debug_token도 있을 때 올바른 설명은?",
    "choices": [
      "응답 모델에 없는 debug_token은 공개 응답에서 제외된다.",
      "함수 반환형이 dict이면 응답 모델보다 우선하여 모든 키가 공개된다.",
      "debug_token은 이름에 token이 있으므로 빈 문자열로 자동 암호화된다.",
      "응답 모델은 문서 표시만 담당하므로 debug_token도 그대로 반환된다."
    ],
    "answer": 1,
    "explanation": "response_model은 반환값을 검증·변환하고 선언되지 않은 필드를 제외한다. Python의 넓은 반환형 힌트와 달리 공개 응답 계약을 구체적으로 정한다.",
    "answerText": "응답 모델에 없는 debug_token은 공개 응답에서 제외된다.",
    "review": {
      "label": "FastAPI 기초 / 응답 모델·출력 계약",
      "url": "https://www.notion.so/6d62fdb141488318bb5281b88b037928"
    }
  },
  {
    "id": 36,
    "section": "FastAPI 기초",
    "prompt": "외부 응답을 기다리는 async def 경로에서 time.sleep(1)을 직접 호출했다. 다른 요청의 처리를 막지 않는 대기로 바꾸려면?",
    "choices": [
      "함수 이름만 async_wait로 바꾼다.",
      "time.sleep(1)을 호출한 뒤 await를 생략한다.",
      "time.sleep(1)의 반환값을 응답 모델로 감싼다.",
      "대기 예시에서는 await asyncio.sleep(1)을 사용해 실행 기회를 양보한다."
    ],
    "answer": 4,
    "explanation": "time.sleep은 현재 스레드를 막는다. await asyncio.sleep은 코루틴을 잠시 멈추고 이벤트 루프가 다른 작업을 진행할 기회를 준다.",
    "answerText": "대기 예시에서는 await asyncio.sleep(1)을 사용해 실행 기회를 양보한다.",
    "review": {
      "label": "FastAPI 기초 / 비동기 처리·외부 API",
      "url": "https://www.notion.so/26b2fdb1414883e9a29e01fb29779f1f"
    }
  },
  {
    "id": 37,
    "section": "FastAPI 기초",
    "prompt": "task_id는 정수이면서 1 이상이어야 하고, 저장된 작업에는 ID 99가 없다. GET /tasks/abc와 GET /tasks/99의 결과를 올바르게 짝지은 것은?",
    "choices": [
      "abc는 404, 99는 422",
      "abc는 422, 99는 404",
      "둘 다 422",
      "둘 다 200과 빈 목록"
    ],
    "answer": 2,
    "explanation": "abc는 정수 변환 실패이므로 422다. 99는 입력 규칙을 통과했지만 해당 단일 자원이 없으므로 404다.",
    "answerText": "abc는 422, 99는 404",
    "review": {
      "label": "FastAPI 기초 / 경로·쿼리 매개변수",
      "url": "https://www.notion.so/73a2fdb14148834a9c4201c54fb63df7"
    }
  },
  {
    "id": 38,
    "section": "FastAPI 기초",
    "prompt": "여러 경로에서 get_run_filters가 준비한 조회 조건을 주입받으려 한다. 올바른 선언은?",
    "choices": [
      "filters: Annotated[RunFilters, Depends(get_run_filters())]",
      "filters: Annotated[RunFilters, Query(get_run_filters)]",
      "filters: Annotated[RunFilters, Depends(get_run_filters)]",
      "filters: Annotated[RunFilters, Path(get_run_filters())]"
    ],
    "answer": 3,
    "explanation": "Depends에는 함수 호출 결과가 아니라 호출 가능한 함수 자체를 전달한다. FastAPI가 요청의 매개변수를 해결한 뒤 그 함수를 실행해 값을 주입한다.",
    "answerText": "filters: Annotated[RunFilters, Depends(get_run_filters)]",
    "review": {
      "label": "FastAPI 기초 / 의존성 주입",
      "url": "https://www.notion.so/28d2fdb141488364a134813ae1373f32"
    }
  },
  {
    "id": 39,
    "section": "FastAPI 기초",
    "prompt": "GET과 POST만 구현된 /tasks 경로로 DELETE /tasks를 보냈다. 강의 예제에서 예상할 상태 코드는?",
    "choices": [
      "404: 같은 경로의 모든 메서드가 없다는 뜻이다.",
      "422: 요청 본문이 없기 때문이다.",
      "204: DELETE는 구현하지 않아도 기본 제공된다.",
      "405: 경로는 있지만 해당 메서드를 허용하지 않는다."
    ],
    "answer": 4,
    "explanation": "같은 경로라도 HTTP 메서드에 따라 연결되는 동작이 다르다. 경로는 존재하지만 DELETE가 등록되지 않았으므로 405 Method Not Allowed다.",
    "answerText": "405: 경로는 있지만 해당 메서드를 허용하지 않는다.",
    "review": {
      "label": "FastAPI 기초 / FastAPI 설치·HTTP·REST",
      "url": "https://www.notion.so/0be2fdb1414882de84988194f408f7f7"
    }
  },
  {
    "id": 40,
    "section": "FastAPI 기초",
    "prompt": "강의의 TaskUpdate 모델에서 title, owner, done은 모두 선택 필드다. PATCH /tasks/1에 {\"done\":true}만 보내는 부분 수정의 의도는?",
    "choices": [
      "title과 owner를 null로 초기화한다.",
      "done만 바꾸고 보내지 않은 편집 필드는 기존 값을 유지한다.",
      "id를 새로 발급하고 작업을 하나 더 만든다.",
      "PUT과 같으므로 title과 owner가 없어 반드시 422다."
    ],
    "answer": 2,
    "explanation": "PATCH는 전달한 필드만 수정한다. 강의의 PUT은 편집 가능한 모든 필드를 필수로 받아 전체 상태를 교체하므로 생략 규칙이 다르다.",
    "answerText": "done만 바꾸고 보내지 않은 편집 필드는 기존 값을 유지한다.",
    "review": {
      "label": "FastAPI 기초 / CRUD 통합·AI 코드 리뷰",
      "url": "https://www.notion.so/b9a2fdb1414883b8b45881da8beeeb4f"
    }
  },
  {
    "id": 41,
    "section": "FastAPI 기초",
    "prompt": "태그는 max_length=5로 입력 개수를 먼저 검사하고, 이후 field_validator에서 소문자화·중복 제거한다. [\"API\",\"api\",\"API\",\"api\",\"API\",\"api\"]를 보냈을 때 예상 결과는?",
    "choices": [
      "중복 제거 후 1개이므로 정상 처리된다.",
      "앞의 5개만 남기고 정상 처리된다.",
      "정규화 전 입력이 6개이므로 422가 반환된다.",
      "문자열 6개가 자동으로 하나의 문자열로 합쳐진다."
    ],
    "answer": 3,
    "explanation": "이 강의에서는 목록의 max_length 검사가 중복 제거보다 먼저 적용된다. 정리 후 개수가 작아져도 원래 입력이 최대 5개를 넘으면 422다.",
    "answerText": "정규화 전 입력이 6개이므로 422가 반환된다.",
    "review": {
      "label": "FastAPI 기초 / Pydantic 요청 검증",
      "url": "https://www.notion.so/e352fdb14148830591b3018f12ec8fcc"
    }
  },
  {
    "id": 42,
    "section": "FastAPI 기초",
    "prompt": "Postman에서 네 요청과 각 요청의 Post-response 검증을 Collection에 저장했다. Runner의 Iterations를 2로 설정해 네 요청을 모두 실행하면?",
    "choices": [
      "총 8번 요청하며 받은 응답을 저장된 검증 기준으로 판정한다.",
      "총 4번 요청하고 FastAPI 서버의 응답 본문을 검증 결과로 덮어쓴다.",
      "총 2번 요청하며 각 반복마다 한 요청만 선택한다.",
      "총 8번 요청하며 OpenAPI에 없어도 모든 검증 스크립트를 자동 생성한다."
    ],
    "answer": 1,
    "explanation": "요청 4개를 2회 반복하면 8번이다. Post-response 스크립트는 받은 응답을 검증할 뿐 서버 응답을 수정하지 않는다.",
    "answerText": "총 8번 요청하며 받은 응답을 저장된 검증 기준으로 판정한다.",
    "review": {
      "label": "FastAPI 기초 / Swagger 문서·API 테스트",
      "url": "https://www.notion.so/6082fdb1414883f0bfd7810a953a778c"
    }
  },
  {
    "id": 43,
    "section": "FastAPI 기초",
    "prompt": "서로 독립적인 두 외부 API 요청을 함께 시작한 뒤 두 결과를 모두 기다리려 한다. 가장 적절한 코드는?",
    "choices": [
      "a = await fetch_a(); b = await fetch_b()",
      "a, b = await asyncio.gather(fetch_a(), fetch_b())",
      "a = fetch_a(); b = fetch_b()  # await 없이 두 결과를 즉시 사용",
      "a, b = await asyncio.gather(await fetch_a(), await fetch_b())"
    ],
    "answer": 2,
    "explanation": "asyncio.gather에 독립적인 코루틴을 전달하면 함께 진행하고 완료 결과를 기다린다. 연속된 await는 순차 대기이며, 코루틴 호출만으로 최종 결과를 얻지는 못한다.",
    "answerText": "a, b = await asyncio.gather(fetch_a(), fetch_b())",
    "review": {
      "label": "FastAPI 기초 / 비동기 처리·외부 API",
      "url": "https://www.notion.so/26b2fdb1414883e9a29e01fb29779f1f"
    }
  },
  {
    "id": 44,
    "section": "FastAPI 기초",
    "prompt": "pytest의 client fixture가 테스트마다 메모리 저장소와 다음 ID를 초기화하고 TestClient(app)을 반환한다. 이에 대한 올바른 설명은?",
    "choices": [
      "테스트는 반드시 별도 fastapi dev 서버에 TCP로 접속한다.",
      "fixture는 테스트가 끝난 뒤에만 실행되므로 이전 테스트의 데이터가 항상 남는다.",
      "TestClient는 Swagger UI 버튼을 대신 클릭하는 브라우저다.",
      "각 테스트가 독립된 상태로 시작하며 별도 개발 서버 없이 같은 프로세스의 app을 검사한다."
    ],
    "answer": 4,
    "explanation": "fixture는 같은 이름의 테스트 매개변수에 준비한 값을 주입한다. 상태 초기화로 테스트 간 간섭을 줄이고, TestClient는 같은 Python 프로세스에서 app에 요청을 전달한다.",
    "answerText": "각 테스트가 독립된 상태로 시작하며 별도 개발 서버 없이 같은 프로세스의 app을 검사한다.",
    "review": {
      "label": "FastAPI 기초 / CRUD 통합·AI 코드 리뷰",
      "url": "https://www.notion.so/b9a2fdb1414883b8b45881da8beeeb4f"
    }
  },
  {
    "id": 45,
    "section": "Supabase",
    "prompt": "PostgreSQL과 Supabase의 관계를 가장 정확히 설명한 것은?",
    "choices": [
      "PostgreSQL은 SQL 편집 화면이고 Supabase가 관계형 DBMS 자체다.",
      "둘은 같은 제품의 무료 이름과 유료 이름이다.",
      "PostgreSQL은 관계형 DBMS이고 Supabase는 이를 제공하며 SQL Editor 등 도구를 갖춘 플랫폼이다.",
      "Supabase는 Redis 전용 클라이언트이고 PostgreSQL과는 연결되지 않는다."
    ],
    "answer": 3,
    "explanation": "PostgreSQL이 실제 관계형 데이터의 저장·관리를 담당한다. Supabase는 프로젝트별 PostgreSQL과 SQL Editor·Data API·Auth 등의 기능을 제공한다.",
    "answerText": "PostgreSQL은 관계형 DBMS이고 Supabase는 이를 제공하며 SQL Editor 등 도구를 갖춘 플랫폼이다.",
    "review": {
      "label": "Supabase / 데이터베이스·DBMS·SQL",
      "url": "https://www.notion.so/1062fdb14148822789ac81486172df4d"
    }
  },
  {
    "id": 46,
    "section": "Supabase",
    "prompt": "대화 503은 존재하지만 메시지는 한 건도 없다. 다음 조회의 a, b 값은?\n\n```sql\nSELECT COUNT(*) AS a, COUNT(m.id) AS b\nFROM chat_lab.conversations c\nLEFT JOIN chat_lab.messages m ON m.conversation_id = c.id\nWHERE c.id = 503;\n```",
    "choices": [
      "a=1, b=0",
      "a=0, b=0",
      "a=1, b=1",
      "a=0, b=1"
    ],
    "answer": 1,
    "explanation": "LEFT JOIN은 연결 메시지가 없어도 왼쪽 대화 행 하나를 남긴다. COUNT(*)는 그 행을 세고 COUNT(m.id)는 NULL을 세지 않는다.",
    "answerText": "a=1, b=0",
    "review": {
      "label": "Supabase / 사용자·대화·메시지 설계와 SQL CRUD",
      "url": "https://www.notion.so/3af2fdb1414882e6a80d01308876f09c"
    }
  },
  {
    "id": 47,
    "section": "Supabase",
    "prompt": "기존 conversations의 최대 ID가 502다. id 열에 BY DEFAULT AS IDENTITY를 추가한 뒤 강의처럼 setval로 현재 최대값을 맞추는 이유는?",
    "choices": [
      "모든 기존 ID와 외래 키 값을 1부터 다시 매기기 위해서다.",
      "삭제된 번호를 항상 재사용하여 ID를 연속적으로 만들기 위해서다.",
      "기본 키 제약을 없애고 요청자가 어떤 ID든 넣게 하기 위해서다.",
      "새 번호 생성기가 기존 행의 번호와 충돌하지 않도록 위치를 맞추기 위해서다."
    ],
    "answer": 4,
    "explanation": "새 IDENTITY 시퀀스는 기존 데이터의 최대 번호를 자동으로 기억하지 않는다. 강의는 max(id)를 기준으로 setval을 실행하며, ID는 연속성보다 고유성이 중요하다.",
    "answerText": "새 번호 생성기가 기존 행의 번호와 충돌하지 않도록 위치를 맞추기 위해서다.",
    "review": {
      "label": "Supabase / FastAPI에서 사용자·대화 데이터 CRUD",
      "url": "https://www.notion.so/5482fdb1414883b8b65e01e5097dfd6a"
    }
  },
  {
    "id": 48,
    "section": "Supabase",
    "prompt": "loans.returned_on이 NULL인 미반납 대출만 찾는 올바른 SQL 조건은?",
    "choices": [
      "WHERE returned_on = NULL",
      "WHERE returned_on IS NULL",
      "WHERE returned_on = 'NULL'",
      "WHERE returned_on IS NOT NULL"
    ],
    "answer": 2,
    "explanation": "NULL은 값이 없음을 나타내며 일반 값처럼 = NULL로 비교하지 않는다. 값이 없는 행은 IS NULL, 값이 있는 행은 IS NOT NULL로 찾는다.",
    "answerText": "WHERE returned_on IS NULL",
    "review": {
      "label": "Supabase / Supabase 시작과 첫 SQL 실행",
      "url": "https://www.notion.so/f242fdb141488317b15b811e0a916c1c"
    }
  },
  {
    "id": 49,
    "section": "Supabase",
    "prompt": "로그인으로 Access token과 Refresh token을 받았다. 보호된 API 호출과 토큰 갱신에 대한 올바른 사용은?",
    "choices": [
      "보호된 요청에는 Access token을 Bearer 헤더로 보내고, 갱신에는 Refresh token을 사용한다.",
      "보호된 요청에는 Refresh token을 Bearer 헤더로 보내고, 갱신에는 비밀번호만 사용한다.",
      "Publishable key 하나만 보내면 로그인 사용자의 신원이 확인된다.",
      "Access token의 JSON을 읽을 수 있으면 서명과 만료 검증은 필요 없다."
    ],
    "answer": 1,
    "explanation": "Access token은 보호된 요청의 사용자 확인에, Refresh token은 새 토큰 쌍 발급에 사용한다. 프로젝트 키는 사용자 신원을 대신하지 않으며 JWT 내용을 읽는 것과 검증은 다르다.",
    "answerText": "보호된 요청에는 Access token을 Bearer 헤더로 보내고, 갱신에는 Refresh token을 사용한다.",
    "review": {
      "label": "Supabase / Supabase Auth로 회원가입·로그인",
      "url": "https://www.notion.so/e732fdb1414882c38a9281c4e0eef862"
    }
  },
  {
    "id": 50,
    "section": "Supabase",
    "prompt": "사용자 A의 데이터를 B가 읽지 못하게 Data API 경로를 구성한다. 강의의 접근 제어 방식으로 가장 적절한 것은?",
    "choices": [
      "Secret key를 브라우저에 보내고 프런트엔드에서 목록만 가린다.",
      "SQL Editor의 조회 성공만 확인한 뒤 사용자별 정책 검증을 생략한다.",
      "Publishable key와 검증된 사용자 Access token을 사용하고 작업 권한과 소유자 RLS 정책을 함께 적용한다.",
      "로그인 성공 후 모든 요청을 service_role로 실행하면 RLS가 자동으로 사용자를 분리한다."
    ],
    "answer": 3,
    "explanation": "GRANT는 작업 권한, RLS는 접근할 행을 제한한다. 사용자 토큰을 Data API에 전달해야 사용자 맥락이 적용되며 service_role은 사용자별 RLS 제한을 우회한다.",
    "answerText": "Publishable key와 검증된 사용자 Access token을 사용하고 작업 권한과 소유자 RLS 정책을 함께 적용한다.",
    "review": {
      "label": "Supabase / 인증 세션과 사용자별 데이터 접근 제어",
      "url": "https://www.notion.so/8fc2fdb14148839886a801b3cb295ad9"
    }
  },
  {
    "id": 51,
    "section": "Supabase",
    "prompt": "FastAPI GET /health가 200과 {\"status\":\"ok\"}를 반환했다. 강의의 첫 Supabase 연동 예제에서 이 결과로 확인할 수 있는 것은?",
    "choices": [
      "chat_lab의 Data API 노출, GRANT, 실제 메시지 조회가 모두 성공했다.",
      "FastAPI 서버가 실행 중이다. Supabase 연결 성공은 메시지 조회 결과로 따로 확인해야 한다.",
      "요청자가 Supabase Auth에 로그인했고 자신의 메시지만 읽을 수 있다.",
      "Secret key가 아닌 DB 비밀번호로 Data API 연결이 완료되었다."
    ],
    "answer": 2,
    "explanation": "이 예제의 /health는 서버 상태 확인 경로다. Supabase 연결·권한·데이터는 실제 메시지 조회 응답과 SQL Editor의 행을 비교해 확인한다.",
    "answerText": "FastAPI 서버가 실행 중이다. Supabase 연결 성공은 메시지 조회 결과로 따로 확인해야 한다.",
    "review": {
      "label": "Supabase / FastAPI와 Supabase 연동",
      "url": "https://www.notion.so/2f72fdb14148837996a481a95443919a"
    }
  },
  {
    "id": 52,
    "section": "Supabase",
    "prompt": "book_copies에서 id만 PK이고 book_id는 NOT NULL인 FK로 books.id를 참조한다. 두 테이블의 관계에 대한 설명으로 옳은 것은?",
    "choices": [
      "book_id가 필수이므로 반드시 식별 관계다.",
      "부모 한 건에 자식 여러 건이 가능하므로 FK는 books 쪽에 두어야 한다.",
      "FK가 있으면 자식의 PK를 별도로 둘 수 없다.",
      "FK가 자식 PK에 포함되지 않았으므로 비식별 관계이며, 필수 여부와는 별개다."
    ],
    "answer": 4,
    "explanation": "식별 관계 여부는 자식의 FK가 자식 PK에도 포함되는지로 판단한다. NOT NULL은 부모 연결의 필수 여부를 정할 뿐 식별 관계를 결정하지 않는다.",
    "answerText": "FK가 자식 PK에 포함되지 않았으므로 비식별 관계이며, 필수 여부와는 별개다.",
    "review": {
      "label": "Supabase / ERD와 관계형 데이터 설계",
      "url": "https://www.notion.so/8632fdb1414882efa8280162da021680"
    }
  },
  {
    "id": 53,
    "section": "Supabase",
    "prompt": "대화별 메시지 수를 구한 뒤 메시지가 0건인 대화만 찾으려 한다. 빈 대화를 보존하고 집계 결과를 거르는 올바른 조합은?",
    "choices": [
      "INNER JOIN과 WHERE COUNT(m.id) = 0",
      "LEFT JOIN과 WHERE COUNT(*) = 0",
      "LEFT JOIN, GROUP BY와 HAVING COUNT(m.id) = 0",
      "INNER JOIN, GROUP BY와 HAVING COUNT(*) = 0"
    ],
    "answer": 3,
    "explanation": "빈 대화를 남기려면 LEFT JOIN이 필요하다. GROUP BY 뒤의 집계 결과는 HAVING으로 고르며, 실제 메시지 수는 NULL을 제외하는 COUNT(m.id)로 센다.",
    "answerText": "LEFT JOIN, GROUP BY와 HAVING COUNT(m.id) = 0",
    "review": {
      "label": "Supabase / 사용자·대화·메시지 설계와 SQL CRUD",
      "url": "https://www.notion.so/3af2fdb1414882e6a80d01308876f09c"
    }
  },
  {
    "id": 54,
    "section": "Supabase",
    "prompt": "Access token이 만료되어 POST /auth/refresh로 세션을 갱신하려 한다. 강의의 API 계약에 맞는 처리는?",
    "choices": [
      "본문의 Refresh token으로 갱신하고 응답의 새 Access·Refresh token으로 기존 두 값을 모두 교체한다.",
      "만료된 Access token을 먼저 인증 통과시킨 뒤 Refresh token을 요청 본문에서 무시한다.",
      "Refresh token을 JWT로 직접 해독한 사용자 ID만 보내 새 토큰을 만든다.",
      "갱신할 때마다 새 프로필과 기존 대화의 복사본을 생성한다."
    ],
    "answer": 1,
    "explanation": "갱신 경로는 본문의 Refresh token으로 Auth의 refresh_session을 호출한다. 만료된 Access token의 선행 통과를 요구하지 않으며 새 토큰 쌍을 받아 기존 값을 모두 교체한다.",
    "answerText": "본문의 Refresh token으로 갱신하고 응답의 새 Access·Refresh token으로 기존 두 값을 모두 교체한다.",
    "review": {
      "label": "Supabase / 인증 세션과 사용자별 데이터 접근 제어",
      "url": "https://www.notion.so/8fc2fdb14148839886a801b3cb295ad9"
    }
  },
  {
    "id": 55,
    "section": "Redis",
    "prompt": "Redis 알림 키를 5초 TTL로 저장하고 6초 뒤 읽었다. GET은 None, TTL은 -2다. 강의에 따른 해석은?",
    "choices": [
      "연결은 끊겼지만 Redis가 마지막 TTL을 -2초로 기억하고 있다.",
      "키가 만료되어 존재하지 않는 정상적인 결과다.",
      "값은 남아 있고 TTL만 무기한으로 바뀌었다.",
      "Hash 필드 두 개만 삭제되었고 키 전체는 남아 있다."
    ],
    "answer": 2,
    "explanation": "강의의 5초 알림은 6초 대기 뒤 만료된다. GET의 None과 TTL의 -2는 키가 없음을 뜻하며, 접속 오류를 뜻하지 않는다.",
    "answerText": "키가 만료되어 존재하지 않는 정상적인 결과다.",
    "review": {
      "label": "Redis / Redis 기초와 Python 연결",
      "url": "https://www.notion.so/3f02fdb141488002a9a2dae637228e96"
    }
  },
  {
    "id": 56,
    "section": "Redis",
    "prompt": "기본 TTL 60초인 Redis 작업 세션에서 GET으로 초안을 읽고 나중에 PATCH로 수정했다. 강의의 만료 규칙은?",
    "choices": [
      "GET은 남은 시간만 읽고, 성공한 PATCH는 TTL을 60초로 다시 설정한다.",
      "GET과 PATCH 모두 TTL을 60초로 다시 설정한다.",
      "GET은 TTL을 연장하지만 PATCH는 남은 시간을 그대로 둔다.",
      "작업 세션이 만료되면 Supabase Access token도 즉시 폐기된다."
    ],
    "answer": 1,
    "explanation": "이 예제는 읽기만으로 수명을 연장하지 않는다. PATCH는 저장과 함께 TTL을 다시 설정한다. Redis 작업 세션과 Supabase 로그인 세션의 수명은 별개다.",
    "answerText": "GET은 남은 시간만 읽고, 성공한 PATCH는 TTL을 60초로 다시 설정한다.",
    "review": {
      "label": "Redis / Redis 임시 작업 세션과 만료",
      "url": "https://www.notion.so/3f02fdb14148804db859fbb690fe5bc1"
    }
  },
  {
    "id": 57,
    "section": "Redis",
    "prompt": "대화 메시지 목록 캐시가 있는 상태에서 PostgreSQL에 새 메시지 저장이 성공했다. 다음 GET에서 새 목록을 읽게 하는 강의의 처리 순서는?",
    "choices": [
      "캐시를 영구 보존하고 원본 DB의 새 메시지를 삭제한다.",
      "캐시 조회 hit이면 토큰 검증과 대화 소유권 확인을 모두 생략한다.",
      "저장 성공 뒤 해당 대화 캐시를 삭제하고 다음 GET에서 원본을 읽어 새 복사본을 만든다.",
      "원본 저장 전에 Redis 목록만 바꾸고 DB 저장 여부와 무관하게 성공으로 처리한다."
    ],
    "answer": 3,
    "explanation": "Cache-aside에서 원본 변경 후 해당 캐시를 무효화한다. 다음 조회는 miss가 되어 DB에서 갱신된 목록을 읽고 다시 캐시한다. 캐시 hit도 인증·소유권 확인을 거친다.",
    "answerText": "저장 성공 뒤 해당 대화 캐시를 삭제하고 다음 GET에서 원본을 읽어 새 복사본을 만든다.",
    "review": {
      "label": "Redis / Redis 대화 이력 캐싱",
      "url": "https://www.notion.so/3f02fdb1414880369770d3b99bad9e49"
    }
  },
  {
    "id": 58,
    "section": "Redis",
    "prompt": "통합 서비스가 메시지의 원본 INSERT에 성공한 뒤 Redis 캐시·초안 정리 중 오류를 만났다. 가장 적절한 판단은?",
    "choices": [
      "두 저장소는 자동으로 같은 트랜잭션이므로 DB INSERT도 반드시 취소된다.",
      "Redis 정리가 실패했으므로 PostgreSQL의 원본은 저장되지 않았다고 단정한다.",
      "원본을 Redis로 옮기면 사용자별 RLS 검사를 대체할 수 있다.",
      "DB 원본 저장 결과와 Redis 정리 결과를 구분해야 하며 둘은 자동으로 하나의 트랜잭션에 묶이지 않는다."
    ],
    "answer": 4,
    "explanation": "강의는 원본 저장과 Redis 정리의 성공 여부를 구분한다. 두 저장소가 자동으로 하나의 트랜잭션을 이루지 않으므로 Redis 정리 실패가 DB 저장 취소를 뜻하지 않는다.",
    "answerText": "DB 원본 저장 결과와 Redis 정리 결과를 구분해야 하며 둘은 자동으로 하나의 트랜잭션에 묶이지 않는다.",
    "review": {
      "label": "Redis / Supabase·Redis 통합 서비스",
      "url": "https://www.notion.so/3f12fdb1414880648df6f6b9307fbbed"
    }
  },
  {
    "id": 59,
    "section": "Redis",
    "prompt": "Redis Pub/Sub에서 구독 연결이 끊긴 동안 공지가 발행되었다. 재연결 이후의 동작에 대한 올바른 설명은?",
    "choices": [
      "놓친 공지는 Pub/Sub이 자동 재전송하지 않으므로 반드시 남길 원문은 별도 저장소에 보관한다.",
      "Pub/Sub이 TTL 60초 동안 공지를 저장하고 모든 재연결 구독자에게 전달한다.",
      "공지의 채널 이름으로 GET을 보내면 놓친 모든 사건이 목록으로 나온다.",
      "PUBLISH 반환값이 1 이상이면 모든 브라우저의 표시 완료가 보장된다."
    ],
    "answer": 1,
    "explanation": "Pub/Sub은 발행 순간 연결된 구독자에게 사건을 전달하며 지난 공지를 재전송하지 않는다. PUBLISH 반환값도 표시 완료 수가 아니라 Redis 구독 연결 수다.",
    "answerText": "놓친 공지는 Pub/Sub이 자동 재전송하지 않으므로 반드시 남길 원문은 별도 저장소에 보관한다.",
    "review": {
      "label": "Redis / Redis Pub/Sub",
      "url": "https://www.notion.so/3f12fdb141488073bfb5f645d2e727b4"
    }
  },
  {
    "id": 60,
    "section": "Redis",
    "prompt": "초안 수정 직전에 키를 조회했지만 실제 저장 직전에 TTL이 끝날 수 있다. 만료된 작업 세션을 PATCH가 되살리지 않도록 하는 Redis Python 저장 방식은?",
    "choices": [
      "r.set(key, value, ex=60, nx=True)",
      "r.set(key, value, ex=60, xx=True)",
      "r.set(key, value) 후 만료되었는지와 무관하게 성공 처리",
      "r.set(key, value, ex=60)만 호출해 기존 키가 없어도 저장"
    ],
    "answer": 2,
    "explanation": "XX는 저장 시점에 키가 있을 때만 값을 바꾼다. EX=60으로 수명도 다시 설정한다. NX는 새 키 생성 조건이고 일반 SET은 만료된 키를 새로 만들 수 있다.",
    "answerText": "r.set(key, value, ex=60, xx=True)",
    "review": {
      "label": "Redis / Redis 임시 작업 세션과 만료",
      "url": "https://www.notion.so/3f02fdb14148804db859fbb690fe5bc1"
    }
  },
  {
    "id": 61,
    "section": "화면 기초",
    "prompt": "다음 React 코드의 동작에 대한 설명으로 옳은 것은?\n\n```javascript\nconst [count, setCount] = useState(0);\n<button onClick={() => setCount(previous => previous + 1)}>+1</button>\n```",
    "choices": [
      "렌더링할 때마다 클릭 없이 count가 1씩 증가한다.",
      "클릭하면 이전 상태에 1을 더한 값을 요청하고 React가 화면을 다시 계산한다.",
      "setCount를 호출하면 현재 실행 중인 함수의 count에 즉시 직접 대입된다.",
      "같은 Counter를 두 곳에 사용하면 두 위치가 하나의 count를 공유한다."
    ],
    "answer": 2,
    "explanation": "onClick에는 클릭 때 실행할 함수를 전달한다. 함수형 상태 변경은 이전 값을 바탕으로 다음 값을 요청하며, 서로 다른 위치의 Counter 상태는 독립적이다.",
    "answerText": "클릭하면 이전 상태에 1을 더한 값을 요청하고 React가 화면을 다시 계산한다.",
    "review": {
      "label": "화면 기초 / React 기본 구조와 화면 상태",
      "url": "https://www.notion.so/e8e2fdb1414883ebb3ed011e57c3762e"
    }
  },
  {
    "id": 62,
    "section": "화면 기초",
    "prompt": "다음 Effect에서 isRunning=true인 동안 count만 바뀌다가 isRunning=false로 바뀌었다. 타이머 처리로 옳은 것은?\n\n```javascript\nuseEffect(() => {\n  if (!isRunning) return;\n  const timerId = setInterval(() => setCount(p => p + 1), 1000);\n  return () => clearInterval(timerId);\n}, [isRunning]);\n```",
    "choices": [
      "count가 바뀔 때마다 타이머를 추가 등록하고 기존 타이머는 유지한다.",
      "isRunning이 false가 되어도 화면에서 제거될 때까지 타이머를 유지한다.",
      "정리 함수를 먼저 실행하지 않고 false 상태의 새 타이머로 교체한다.",
      "count만 바뀔 때는 기존 타이머를 유지하고, false로 바뀌면 기존 타이머를 해제한다."
    ],
    "answer": 4,
    "explanation": "의존성은 isRunning이다. count 변경만으로 Effect를 다시 연결하지 않으며, 실행 여부 변경 시 이전 정리 함수가 타이머를 해제한다.",
    "answerText": "count만 바뀔 때는 기존 타이머를 유지하고, false로 바뀌면 기존 타이머를 해제한다.",
    "review": {
      "label": "화면 기초 / React 기본 구조와 화면 상태",
      "url": "https://www.notion.so/e8e2fdb1414883ebb3ed011e57c3762e"
    }
  },
  {
    "id": 63,
    "section": "화면 기초",
    "prompt": "Streamlit 폼 안에 질문 제목과 본문 입력창이 있다. 사용자가 제목을 바꾼 뒤 본문 입력창으로 이동하고 마지막에 제출 버튼을 눌렀다. 폼의 처리 방식은?",
    "choices": [
      "입력 변경만으로 새 값을 전달하지 않고, 제출할 때 제목과 본문을 함께 전달해 코드를 재실행한다.",
      "입력창에서 초점이 이동할 때마다 제목만 먼저 서버에 제출한다.",
      "제출하면 Python 재실행 없이 브라우저의 문자열만 바뀐다.",
      "폼 안의 값은 제출 뒤에도 Python 코드에서 읽을 수 없다."
    ],
    "answer": 1,
    "explanation": "폼은 여러 입력을 한 번에 제출하는 묶음이다. 폼 안의 입력 변경은 제출 전까지 새 값을 전달하지 않는다.",
    "answerText": "입력 변경만으로 새 값을 전달하지 않고, 제출할 때 제목과 본문을 함께 전달해 코드를 재실행한다.",
    "review": {
      "label": "화면 기초 / Streamlit 기본 개념과 UI 요소",
      "url": "https://www.notion.so/b7e2fdb14148837a83ce81e6801499a5"
    }
  },
  {
    "id": 64,
    "section": "화면 기초",
    "prompt": "Streamlit에서 페이지 이동으로 입력 위젯이 사라져도 메모를 같은 화면 세션에서 유지하려 한다. 강의 예제에 맞는 설계는?",
    "choices": [
      "모든 페이지의 입력 위젯에 같은 key를 중복 부여한다.",
      "위젯 key만 같으면 해당 위젯이 사라져도 영구 보관된다고 가정한다.",
      "위젯 값을 별도의 Session State 보관 키에 복사하고 페이지에서 그 값을 사용한다.",
      "일반 지역 변수에 복사하면 브라우저 새로고침 후에도 값이 복원된다."
    ],
    "answer": 3,
    "explanation": "위젯이 그려지지 않으면 연결된 key와 값이 정리될 수 있어 별도 보관 키를 사용한다. Session State는 새로고침을 넘어서는 영구 저장이 아니다.",
    "answerText": "위젯 값을 별도의 Session State 보관 키에 복사하고 페이지에서 그 값을 사용한다.",
    "review": {
      "label": "화면 기초 / Streamlit 기본 개념과 UI 요소",
      "url": "https://www.notion.so/b7e2fdb14148837a83ce81e6801499a5"
    }
  },
  {
    "id": 65,
    "section": "화면 기초",
    "prompt": "Streamlit 챗봇 UI에서 Gemini 응답이 실패한 뒤 사용자가 응답 요청 취소를 눌렀다. 강의 예제의 올바른 결과는?",
    "choices": [
      "실패한 질문과 현재 대화 ID를 함께 삭제한다.",
      "이력의 질문은 유지하고 답변 대기 상태만 해제한다.",
      "같은 질문을 자동 재전송한 뒤 취소 결과를 표시한다.",
      "질문을 assistant 역할로 바꾸어 완료된 답변으로 취급한다."
    ],
    "answer": 2,
    "explanation": "질문은 응답 대기와 실패 상태에도 보관한다. 명시적 재시도에서만 다시 요청하고, 요청 취소는 질문을 지우지 않고 대기 상태를 해제한다.",
    "answerText": "이력의 질문은 유지하고 답변 대기 상태만 해제한다.",
    "review": {
      "label": "화면 기초 / Streamlit 챗봇 UI",
      "url": "https://www.notion.so/75b2fdb14148833a88db011804ac7988"
    }
  },
  {
    "id": 66,
    "section": "화면 기초",
    "prompt": "React 화면은 http://localhost:5173에서 열리고 FastAPI는 다른 출처에 있다. CORS와 Vite 환경변수에 대한 설명으로 옳은 것은?",
    "choices": [
      "FastAPI에서 화면 Origin을 허용하고, VITE_ 값에는 브라우저에 공개 가능한 API 주소만 넣는다.",
      "FastAPI에서 화면 Origin을 허용하면 VITE_ 변수에 비밀 키를 넣어도 브라우저에 노출되지 않는다.",
      "localhost와 127.0.0.1은 포트가 같으면 반드시 같은 Origin이다.",
      "CORS 허용 목록에는 요청을 보내는 React 화면이 아니라 API 자신의 주소만 등록한다."
    ],
    "answer": 1,
    "explanation": "React는 브라우저에서 API를 요청하므로 화면 Origin의 허용이 필요하다. Origin은 프로토콜·호스트·포트의 조합이고 VITE_ 값은 브라우저 코드에 포함된다.",
    "answerText": "FastAPI에서 화면 Origin을 허용하고, VITE_ 값에는 브라우저에 공개 가능한 API 주소만 넣는다.",
    "review": {
      "label": "화면 기초 / React와 FastAPI 연동",
      "url": "https://www.notion.so/a6f2fdb141488399abdd81debfaebb25"
    }
  },
  {
    "id": 67,
    "section": "화면 기초",
    "prompt": "Streamlit과 FastAPI 연동 화면에서 메시지 저장 성공 응답을 확인했으나 후속 기록 GET이 실패했다. 적절한 처리는?",
    "choices": [
      "저장 실패로 간주하고 같은 메시지 POST를 자동 반복한다.",
      "DB 저장을 취소하기 위해 방금 저장한 메시지를 즉시 DELETE한다.",
      "조회 실패를 정상 빈 목록으로 바꾸어 기존 기록을 모두 지운다.",
      "확인된 저장 결과를 유지하고 후속 조회 실패를 별도로 처리한다."
    ],
    "answer": 4,
    "explanation": "메시지 저장과 후속 기록 갱신은 별도 결과다. 저장 성공 후 GET 실패가 원본 저장을 취소하지 않으며 쓰기를 무조건 반복하지 않는다.",
    "answerText": "확인된 저장 결과를 유지하고 후속 조회 실패를 별도로 처리한다.",
    "review": {
      "label": "화면 기초 / Streamlit과 FastAPI 연동",
      "url": "https://www.notion.so/8bb2fdb1414883d49765811e8e14bc0a"
    }
  },
  {
    "id": 68,
    "section": "화면 기초",
    "prompt": "다음 JavaScript 코드 실행 뒤 original.title과 changed.title의 값은?\n\n```javascript\nconst original = { id: 7, title: \"대화\" };\nconst changed = { ...original, title: \"수정\" };\n```",
    "choices": [
      "original.title은 \"수정\", changed.title은 \"수정\"이다.",
      "const 객체의 속성을 바꾸려 했으므로 구문 오류가 발생한다.",
      "original.title은 \"대화\", changed.title은 \"수정\"이다.",
      "뒤의 title이 펼치기보다 먼저 적용되어 둘 다 \"대화\"이다."
    ],
    "answer": 3,
    "explanation": "객체 펼치기는 바깥 객체의 얕은 복사본을 만들고 뒤의 같은 속성이 앞의 값을 덮어쓴다. 이 코드에서는 원본의 title을 변경하지 않는다.",
    "answerText": "original.title은 \"대화\", changed.title은 \"수정\"이다.",
    "review": {
      "label": "화면 기초 / 웹 UI를 위한 JavaScript 기초",
      "url": "https://www.notion.so/d6f2fdb14148835e81e3819a6c2f259d"
    }
  },
  {
    "id": 69,
    "section": "AI 대화",
    "prompt": "FastAPI의 저장된 질문 기반 AI 답변 생성 흐름에 맞는 순서는?",
    "choices": [
      "assistant 역할의 빈 메시지 저장 → 그 ID로 질문 생성 → 질문 저장",
      "Redis 초안 조회 → 초안 ID를 질문 ID로 사용 → assistant 역할만 지정",
      "화면 목록에서 마지막 글 선택 → 임의의 예시 ID로 답변 POST → 질문 저장",
      "user 질문 POST → 저장 응답의 실제 message.id 확인 → 해당 질문 ID로 답변 POST"
    ],
    "answer": 4,
    "explanation": "질문 저장을 먼저 확인한 뒤 실제 질문 ID를 답변 요청에 넣는다. 서버는 같은 대화의 user 원본을 권한 확인 후 읽어 AI 답변을 생성·저장한다.",
    "answerText": "user 질문 POST → 저장 응답의 실제 message.id 확인 → 해당 질문 ID로 답변 POST",
    "review": {
      "label": "AI 대화 / FastAPI와 AI 답변 연동",
      "url": "https://www.notion.so/3ab2fdb1414882f9b85781ec2772a2fd"
    }
  },
  {
    "id": 70,
    "section": "AI 대화",
    "prompt": "Gemini 응답에 일부 text가 있지만 finishReason이 STOP이 아니다. 강의 예제에서 완성 답변의 처리로 옳은 것은?",
    "choices": [
      "text가 한 글자라도 있으면 assistant 원본으로 저장한다.",
      "완성 답변으로 저장하지 않고 오류로 처리한다.",
      "thought 조각을 text 뒤에 붙여 완성 답변으로 저장한다.",
      "종료 이유를 STOP으로 바꾼 뒤 사용량만 제외하고 저장한다."
    ],
    "answer": 2,
    "explanation": "정상 종료 STOP을 확인한 뒤 thought를 제외한 text를 연결한다. 종료 이유가 없거나 STOP 이외이면 글이 있어도 완성 답변으로 저장하지 않는다.",
    "answerText": "완성 답변으로 저장하지 않고 오류로 처리한다.",
    "review": {
      "label": "AI 대화 / FastAPI와 AI 답변 연동",
      "url": "https://www.notion.so/3ab2fdb1414882f9b85781ec2772a2fd"
    }
  },
  {
    "id": 71,
    "section": "AI 대화",
    "prompt": "두 화면 A·B가 같은 Redis 초안의 revision r1을 읽었다. A가 수정해 새 revision을 받은 뒤 B가 r1로 PATCH했다. 올바른 처리와 이유는?",
    "choices": [
      "B의 글로 무조건 덮어쓴다. revision은 표시용 값이기 때문이다.",
      "B의 요청은 초안을 조회하는 요청으로 자동 변경된다.",
      "409 충돌을 반환한다. 저장할 때 읽은 버전이 현재 버전과 같은지 검사하기 때문이다.",
      "r1의 UUID가 새 UUID보다 사전순으로 작으면 자동 병합한다."
    ],
    "answer": 3,
    "explanation": "낙관적 동시성 제어는 읽은 revision과 현재 저장본을 비교한다. 다른 화면이 먼저 수정하면 409이며 UUID revision은 시간순 증가 번호가 아니다.",
    "answerText": "409 충돌을 반환한다. 저장할 때 읽은 버전이 현재 버전과 같은지 검사하기 때문이다.",
    "review": {
      "label": "AI 대화 / 로그인 유지와 초안 상태 관리",
      "url": "https://www.notion.so/caa2fdb1414883e8b916016c8eb982ec"
    }
  },
  {
    "id": 72,
    "section": "AI 대화",
    "prompt": "질문 전송 후 응답을 받지 못해 저장 여부가 불확실하다. 같은 질문의 명시적 재시도에 사용할 client_request_id는?",
    "choices": [
      "최초 전송의 UUID를 유지한다.",
      "시도할 때마다 새 UUID를 발급한다.",
      "최근 대화의 메시지 ID로 바꾼다.",
      "접근 토큰 문자열로 바꾸어 사용자를 구별한다."
    ],
    "answer": 1,
    "explanation": "같은 전송의 재시도는 최초 본문과 UUID를 유지한다. 접수 기록이 같은 전송의 원본을 찾아 중복 생성을 막으며 새 질문에만 새 UUID를 사용한다.",
    "answerText": "최초 전송의 UUID를 유지한다.",
    "review": {
      "label": "AI 대화 / 메시지 전송 재시도와 이력 갱신",
      "url": "https://www.notion.so/52e2fdb1414882238088012c5b613b29"
    }
  },
  {
    "id": 73,
    "section": "AI 대화",
    "prompt": "AI 응답 스트리밍에서 delta 사건을 여러 번 받았다. 이를 확정된 assistant 메시지로 취급할 수 있는 기준은?",
    "choices": [
      "첫 delta를 받으면 전체 답변의 DB 저장도 완료된 것이다.",
      "SSE의 HTTP 상태가 200이면 이후 error와 관계없이 저장 성공이다.",
      "빈 줄로 delta 사건이 끝났으면 답변 전체가 확정된 것이다.",
      "완성 결과를 검증하고 DB 저장 응답을 확인한 뒤 전달되는 done을 기준으로 확정한다."
    ],
    "answer": 4,
    "explanation": "delta는 임시 생성 조각이다. 완성 결과 검증과 DB 원본 저장을 마친 뒤 done으로 완료를 알리므로 일부 글이나 HTTP 200만으로 확정하지 않는다.",
    "answerText": "완성 결과를 검증하고 DB 저장 응답을 확인한 뒤 전달되는 done을 기준으로 확정한다.",
    "review": {
      "label": "AI 대화 / 멀티턴 대화와 AI 응답 스트리밍",
      "url": "https://www.notion.so/f792fdb1414882569d8001cc028cd358"
    }
  },
  {
    "id": 74,
    "section": "AI 대화",
    "prompt": "비공개 첨부 업로드의 pending과 ready에 대한 설명으로 옳은 것은?",
    "choices": [
      "파일을 선택하면 즉시 ready이며 Storage 요청은 필요 없다.",
      "DB 정보 저장과 Storage 파일 저장은 별도 요청이며, 파일 저장과 DB 확인을 마쳐야 ready다.",
      "pending은 모든 파일의 공개 URL이 이미 발급되었다는 뜻이다.",
      "DB 트랜잭션 한 번으로 Storage 저장까지 반드시 함께 완료된다."
    ],
    "answer": 2,
    "explanation": "pending은 저장 확인 대기이고 ready는 파일 저장과 DB 확인 완료다. DB와 Storage 작업은 하나의 DB 트랜잭션으로 묶이지 않는다.",
    "answerText": "DB 정보 저장과 Storage 파일 저장은 별도 요청이며, 파일 저장과 DB 확인을 마쳐야 ready다.",
    "review": {
      "label": "AI 대화 / 이미지·PDF 첨부와 비공개 파일 관리",
      "url": "https://www.notion.so/72b2fdb1414883038410018d2a99d9b4"
    }
  },
  {
    "id": 75,
    "section": "로그·피드백·실시간 알림",
    "prompt": "Redis Pub/Sub 로그 알림 연결이 끊긴 동안 AI 요청 로그가 새로 저장됐다. 재연결 후 누락분을 확인하는 적절한 방법은?",
    "choices": [
      "저장된 DB 로그 원본을 재조회하고 로그 ID로 병합한다.",
      "Redis Pub/Sub이 끊긴 동안의 모든 사건을 자동 재생할 때까지 기다린다.",
      "새 event_id를 붙여 같은 AI 답변 생성을 다시 실행한다.",
      "PUBLISH 성공 여부만 확인하고 로그 목록 조회는 생략한다."
    ],
    "answer": 1,
    "explanation": "Pub/Sub은 연결이 끊긴 동안의 사건을 재생하지 않는다. 영구 로그는 DB에 있으므로 원본 재조회와 ID 병합으로 누락을 복구한다.",
    "answerText": "저장된 DB 로그 원본을 재조회하고 로그 ID로 병합한다.",
    "review": {
      "label": "로그·피드백·실시간 알림 / 실시간 로그 알림과 Supabase Realtime",
      "url": "https://www.notion.so/6142fdb1414882da88fe8139bc6a4f35"
    }
  },
  {
    "id": 76,
    "section": "로그·피드백·실시간 알림",
    "prompt": "조회 A가 버전 7의 페이지를 읽었다. 수정 B가 원본을 버전 8로 바꾸고 캐시를 지운 뒤 A가 버전 7 페이지를 늦게 캐시에 저장했다. 다음 GET의 올바른 동작은?",
    "choices": [
      "TTL이 남아 있으므로 버전 확인 없이 캐시 페이지를 반환한다.",
      "캐시 본문을 그대로 두고 버전 번호만 8로 바꾼다.",
      "DB 버전 8과 캐시 버전 7의 불일치를 확인해 캐시를 건너뛰고 DB를 읽는다.",
      "캐시 버전 7에 맞추기 위해 DB 버전을 7로 되돌린다."
    ],
    "answer": 3,
    "explanation": "본문과 읽은 버전을 함께 보관해야 늦은 SET을 검출할 수 있다. 현재 DB 버전과 다른 복사본은 사용하지 않으며 과거 본문에 새 번호만 붙이지 않는다.",
    "answerText": "DB 버전 8과 캐시 버전 7의 불일치를 확인해 캐시를 건너뛰고 DB를 읽는다.",
    "review": {
      "label": "로그·피드백·실시간 알림 / 캐시 버전 일관성과 통합 확인",
      "url": "https://www.notion.so/faf2fdb141488367aa40813dd9750d90"
    }
  },
  {
    "id": 77,
    "section": "로그·피드백·실시간 알림",
    "prompt": "AI 요청 로그 대시보드의 토큰 합계와 평균 경과 시간 계산에 맞는 설명은?",
    "choices": [
      "사용량을 모르는 null은 0으로 확정하고 성공 로그만 평균에 포함한다.",
      "확인된 토큰 합계에는 total_tokens가 null이 아닌 행을 포함하고, 평균 시간에는 조건에 맞는 성공·실패·취소 로그를 포함한다.",
      "현재 화면에 불러온 로그만으로 전체 기간의 집계를 대체한다.",
      "실패·취소는 AI 시도가 아니므로 토큰과 시간 집계에서 항상 제외한다."
    ],
    "answer": 2,
    "explanation": "알 수 없는 사용량 null과 확인된 0은 다르다. 전체 조건 집계는 DB RPC로 계산하며 평균 시간은 조건에 맞는 성공·실패·취소를 포함한다.",
    "answerText": "확인된 토큰 합계에는 total_tokens가 null이 아닌 행을 포함하고, 평균 시간에는 조건에 맞는 성공·실패·취소 로그를 포함한다.",
    "review": {
      "label": "로그·피드백·실시간 알림 / 답변 피드백·요청 로그·대시보드",
      "url": "https://www.notion.so/3fa2fdb1414880719c3cd3faa737ba3a"
    }
  },
  {
    "id": 78,
    "section": "서비스 배포",
    "prompt": "배포 버전의 새 화면에서 로그인 상태를 복원하는 구조에 대한 설명으로 옳은 것은?",
    "choices": [
      "HttpOnly 쿠키에 접근·갱신 토큰을 넣고 JavaScript가 읽어 Session State를 채운다.",
      "브라우저 새로고침 뒤에도 기존 Session State가 자동으로 이어져 서버 기록이 필요 없다.",
      "로그인을 복원할 때마다 서버 로그인 기록의 최대 수명을 다시 7일 연장한다.",
      "쿠키의 난수 세션 ID로 서버 로그인 기록을 확인하고, 일회용 코드 교환으로 새 화면의 인증 정보를 채운다."
    ],
    "answer": 4,
    "explanation": "쿠키에는 서버 기록을 찾는 세션 ID를 둔다. 유효한 기록을 확인한 뒤 Python 서버가 일회용 코드를 교환하며, 새 Session State에 접근 토큰을 채운다. 복원으로 최대 로그인 수명을 연장하지 않는다.",
    "answerText": "쿠키의 난수 세션 ID로 서버 로그인 기록을 확인하고, 일회용 코드 교환으로 새 화면의 인증 정보를 채운다.",
    "review": {
      "label": "서비스 배포 / 배포 버전의 사용자 흐름과 변경점",
      "url": "https://www.notion.so/f692fdb1414882079c1a816a647ff436"
    }
  },
  {
    "id": 79,
    "section": "서비스 배포",
    "prompt": "Render 배포 후 /health가 HTTP 200과 {\"status\":\"ok\"}를 반환했다. 이 결과로 확인할 수 있는 범위는?",
    "choices": [
      "Supabase DB·Redis·Gemini의 실제 요청이 모두 성공했다.",
      "사용자 프로필과 비공개 첨부의 권한까지 모두 검증됐다.",
      "API 서버의 해당 응답을 확인한 것이며, 로그인·보호 DB 조회 등은 별도로 검증해야 한다.",
      "GitHub에 올린 로컬 .env가 자동으로 Render에 적용됐음이 확인됐다."
    ],
    "answer": 3,
    "explanation": "이 앱의 /health는 DB·Redis·Gemini를 조회하지 않는다. 실행 응답과 외부 서비스·보호 API 검증을 구분해야 하며 환경변수도 별도로 등록한다.",
    "answerText": "API 서버의 해당 응답을 확인한 것이며, 로그인·보호 DB 조회 등은 별도로 검증해야 한다.",
    "review": {
      "label": "서비스 배포 / FastAPI를 Render에 배포하기",
      "url": "https://www.notion.so/eaf2fdb14148832abdcb8161480feece"
    }
  },
  {
    "id": 80,
    "section": "서비스 배포",
    "prompt": "Streamlit Cloud의 API_BASE_URL을 http://127.0.0.1:8000으로 설정했더니 원격 Render API에 연결되지 않았다. 올바른 수정은?",
    "choices": [
      "API_BASE_URL을 Render의 HTTPS 기본 주소로 바꾼다. Cloud의 127.0.0.1은 Cloud 서버 자신이다.",
      "Render의 주소 대신 사용자 PC의 localhost를 입력하면 Cloud Python이 PC에 연결한다.",
      "CORS 허용 목록만 넓히면 127.0.0.1이 Render 주소로 해석된다.",
      "API_BASE_URL을 Cloud 앱 주소로 바꾸면 같은 저장소의 backend를 자동 실행한다."
    ],
    "answer": 1,
    "explanation": "일반 API 요청은 Cloud의 Streamlit Python 서버가 Render로 보낸다. 원격 환경의 localhost는 Cloud 자신이므로 Render HTTPS 주소가 필요하며 브라우저 CORS 문제와 구분한다.",
    "answerText": "API_BASE_URL을 Render의 HTTPS 기본 주소로 바꾼다. Cloud의 127.0.0.1은 Cloud 서버 자신이다.",
    "review": {
      "label": "서비스 배포 / Streamlit Cloud로 배포하기",
      "url": "https://www.notion.so/79e2fdb14148826fbfa501981a2af4cb"
    }
  }
];

# C Proqramlaşdırma Dili - Tam Roadmap 🚀

> Sıfırdan Ultra Advanced Səviyyəyə Qədər Tam Təlimat

---

## 📚 Giriş

Bu roadmap C dilini tam sıfırdan öyrənib peşəkar səviyyəyə çatmaq istəyən hər kəs üçün hazırlanıb. Hər bölmə üzrə nəzəri biliklər, praktiki məşqlər və real layihə təklifləri verilmişdir.

---

## 🎯 Səviyyələr

- **Level 0**: Ümumi Hazırlıq (0-1 həftə)
- **Level 1**: Əsaslar (1-4 həftə)
- **Level 2**: Orta Səviyyə (1-2 ay)
- **Level 3**: Qabaqcıl (2-4 ay)
- **Level 4**: Expert (4-12 ay)
- **Level 5**: Master (1+ il)

---

# Level 0: Ümumi Hazırlıq 🔰

## Proqramlaşdırmaya Giriş

### Öyrənməli Konseptlər:
- Proqramlaşdırma nədir?
- Kompilyasiya vs İnterpretasiya
- C dilinin tarixi və əhəmiyyəti
- C dilinin istifadə sahələri (OS, embedded systems, compilers)

### Alətlər:
1. **Text Editor/IDE seçimi**:
   - Visual Studio Code (tövsiyə olunur)
   - CLion
   - Code::Blocks
   - Vim/Neovim (advanced)

2. **Compiler quraşdırılması**:
   - **Windows**: MinGW-w64 və ya MSYS2
   - **Linux**: GCC (əksər distrolarda var)
   - **MacOS**: Clang (Xcode Command Line Tools)

3. **Terminal/Command Line istifadəsi**:
   - Əsas komandalar
   - Fayllarla işləmə
   - Proqramların run edilməsi

### Praktika:
```bash
# Compiler yoxlama
gcc --version

# İlk proqram kompilyasiya və işə salma
gcc hello.c -o hello
./hello
```

---

# Level 1: Əsaslar 📖

## 1.1 İlk Proqram və Struktur

### Konseptlər:
```c
#include <stdio.h>

int main() {
    printf("Salam Dunya!\n");
    return 0;
}
```

**Öyrəniləcəklər**:
- `#include` direktivləri
- `main()` funksiyası
- `printf()` funksiyası
- Return values
- Kommentlər (`//` və `/* */`)

### Praktika:
- 10 fərqli "Hello World" variantı yaz
- Özün haqqında məlumat çap edən proqram
- ASCII art çap edən proqram

---

## 1.2 Dəyişənlər və Data Tiplər

### Əsas Tiplər:

```c
// Tam ədədlər
int age = 25;
short small_num = 100;
long big_num = 1000000L;
long long very_big = 9223372036854775807LL;

// Onluq ədədlər
float pi = 3.14f;
double precise_pi = 3.14159265359;

// Simvol
char letter = 'A';

// Boolean (C99+)
#include <stdbool.h>
bool is_active = true;

// Unsigned variantları
unsigned int positive_only = 42;
```

### Konstant və Makroslar:
```c
#define PI 3.14159
const int MAX_SIZE = 100;
```

### Format Specifiers:
```c
printf("%d\n", 42);        // int
printf("%f\n", 3.14);      // float/double
printf("%c\n", 'A');       // char
printf("%s\n", "text");    // string
printf("%p\n", &variable); // pointer
printf("%ld\n", 123L);     // long
printf("%lld\n", 123LL);   // long long
printf("%u\n", 42U);       // unsigned
```

### Praktika:
- Kalkulator proqramı (sadə)
- Temperatur çevirici (Celsius ↔ Fahrenheit)
- Dəyişən tipləri və limitləri göstərən proqram

---

## 1.3 Operatorlar

### Arifmetik Operatorlar:
```c
int a = 10, b = 3;
printf("%d\n", a + b);  // 13
printf("%d\n", a - b);  // 7
printf("%d\n", a * b);  // 30
printf("%d\n", a / b);  // 3 (integer division)
printf("%d\n", a % b);  // 1 (qalıq)
```

### Müqayisə Operatorları:
```c
==  // bərabərdir
!=  // bərabər deyil
>   // böyükdür
<   // kiçikdir
>=  // böyük və ya bərabərdir
<=  // kiçik və ya bərabərdir
```

### Məntiqi Operatorlar:
```c
&&  // AND
||  // OR
!   // NOT
```

### Artırma/Azaltma:
```c
int x = 5;
x++;    // post-increment: əvvəl x istifadə olur, sonra artır
++x;    // pre-increment: əvvəl artır, sonra istifadə olur
x--;    // post-decrement
--x;    // pre-decrement
```

### Bitwise Operatorlar:
```c
&   // AND
|   // OR
^   // XOR
~   // NOT
<<  // left shift
>>  // right shift
```

### Praktika:
- BMI kalkulyatoru
- Bitwise operatorlarla bayraq sistemi
- Operator precedence öyrənmək

---

## 1.4 Input/Output

### Input Almaq:
```c
int age;
printf("Yashinizi daxil edin: ");
scanf("%d", &age);

char name[50];
printf("Adinizi daxil edin: ");
scanf("%s", name);

// Boşluqlu mətn üçün
fgets(name, 50, stdin);
```

### Praktika:
- İstifadəçi məlumatları toplayan anket
- Sadə hesab makinası (user input ilə)
- Rəqəm təxmin oyunu

---

## 1.5 Şərt İfadələri

### if-else:
```c
int score = 75;

if (score >= 90) {
    printf("Əla!\n");
} else if (score >= 70) {
    printf("Yaxshi!\n");
} else if (score >= 50) {
    printf("Kafi!\n");
} else {
    printf("Kafi deyil!\n");
}
```

### Ternary Operator:
```c
int max = (a > b) ? a : b;
```

### switch-case:
```c
char grade = 'B';

switch(grade) {
    case 'A':
        printf("Əla!\n");
        break;
    case 'B':
        printf("Yaxshi!\n");
        break;
    case 'C':
        printf("Kafi!\n");
        break;
    default:
        printf("Kafi deyil!\n");
}
```

### Praktika:
- Həftənin günü tapmaq
- Kalkulyator (switch ilə)
- Ay və fəsil təyin edici
- Tam ədəd qəbul edən sadə menyu sistemi

---

## 1.6 Döngülər (Loops)

### for Loop:
```c
for (int i = 0; i < 10; i++) {
    printf("%d ", i);
}
// 0 1 2 3 4 5 6 7 8 9
```

### while Loop:
```c
int i = 0;
while (i < 10) {
    printf("%d ", i);
    i++;
}
```

### do-while Loop:
```c
int i = 0;
do {
    printf("%d ", i);
    i++;
} while (i < 10);
```

### İç-içə Döngülər:
```c
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        printf("* ");
    }
    printf("\n");
}
```

### break və continue:
```c
for (int i = 0; i < 10; i++) {
    if (i == 5) break;      // döngüdən çıx
    if (i % 2 == 0) continue; // növbəti iterasiyaya keç
    printf("%d ", i);
}
```

### Praktika:
- Vurma cədvəli
- Faktorial hesablama
- Fibonacci seriyası
- Ulduz nümunələri (pyramid, diamond)
- Sadə ədədləri tapmaq
- Armstrong ədədlərini yoxlamaq

---

## 1.7 Funksiyalar (Functions)

### Sadə Funksiya:
```c
void greet() {
    printf("Salam!\n");
}

int main() {
    greet();
    return 0;
}
```

### Parametrli Funksiyalar:
```c
void greet_person(char name[]) {
    printf("Salam, %s!\n", name);
}

int add(int a, int b) {
    return a + b;
}
```

### Function Prototypes:
```c
// Prototip
int multiply(int, int);

int main() {
    printf("%d\n", multiply(5, 3));
    return 0;
}

// Təyin
int multiply(int a, int b) {
    return a * b;
}
```

### Rekursiya:
```c
int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
```

### Praktika:
- Riyazi funksiyalar kitabxanası
- Palindrom yoxlama funksiyası
- Hanoi Tower problemi (rekursiya)
- Menyu əsaslı proqram (funksiyalarla)

---

# Level 2: Orta Səviyyə 🎓

## 2.1 Massivlər (Arrays)

### Bir Ölçülü Massiv:
```c
int numbers[5] = {1, 2, 3, 4, 5};

// Elementlərə giriş
printf("%d\n", numbers[0]); // 1

// Dəyişdirmək
numbers[2] = 10;

// Döngü ilə
for (int i = 0; i < 5; i++) {
    printf("%d ", numbers[i]);
}
```

### Çox Ölçülü Massivlər:
```c
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Giriş
printf("%d\n", matrix[1][2]); // 6

// İç-içə döngü
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", matrix[i][j]);
    }
    printf("\n");
}
```

### Praktika:
- Massivin ən böyük/kiçik elementi
- Massiv sıralama (bubble sort)
- İki massivin birləşdirilməsi
- Matris əməliyyatları (toplama, vurma)
- Tic-Tac-Toe oyunu

---

## 2.2 Stringlər

### String Əsasları:
```c
char name[] = "Ali";
char surname[20] = "Veliyev";

// String uzunluğu
int len = strlen(name);

// String kopyalama
strcpy(surname, "Mammadov");

// String müqayisəsi
if (strcmp(name1, name2) == 0) {
    printf("Eynidir\n");
}

// String birləşdirmə
strcat(name, surname);
```

### String Funksiyaları:
```c
#include <string.h>

strlen()  // uzunluq
strcpy()  // kopyala
strcat()  // birləşdir
strcmp()  // müqayisə et
strchr()  // simvol tap
strstr()  // substring tap
strtok()  // parçala
```

### Praktika:
- Palindrom yoxlayıcı
- Sözləri say
- Simvolların tezliyini hesabla
- Sadə şifrələmə/deşifrələmə
- Anagram yoxlama

---

## 2.3 Göstəricilər (Pointers) - Əsas

### Pointer Nədir:
```c
int x = 10;
int *ptr = &x;  // ptr indi x-in ünvanını saxlayır

printf("x-in dəyəri: %d\n", x);
printf("x-in ünvanı: %p\n", &x);
printf("ptr-də saxlanan ünvan: %p\n", ptr);
printf("ptr vasitəsilə x-in dəyəri: %d\n", *ptr);
```

### Pointer Arifmetikası:
```c
int arr[] = {10, 20, 30, 40, 50};
int *p = arr;

printf("%d\n", *p);      // 10
printf("%d\n", *(p+1));  // 20
printf("%d\n", *(p+2));  // 30

p++;
printf("%d\n", *p);      // 20
```

### Pointer və Massivlər:
```c
int arr[5] = {1, 2, 3, 4, 5};
int *ptr = arr;

for (int i = 0; i < 5; i++) {
    printf("%d ", *(ptr + i));
}
```

### Praktika:
- Pointer ilə massiv manipulyasiyası
- İki dəyişəni swap etmək (pointer ilə)
- Pointer massivi

---

## 2.4 Funksiyalar və Pointerlər

### Pass by Value vs Pass by Reference:
```c
// Pass by value
void increment_value(int x) {
    x++;  // orijinal dəyişməz
}

// Pass by reference
void increment_reference(int *x) {
    (*x)++;  // orijinal dəyişir
}

int main() {
    int num = 5;
    increment_value(num);
    printf("%d\n", num);  // 5
    
    increment_reference(&num);
    printf("%d\n", num);  // 6
    return 0;
}
```

### Funksiyadan Pointer Qaytarmaq:
```c
int* get_array() {
    static int arr[5] = {1, 2, 3, 4, 5};
    return arr;
}
```

### Praktika:
- Massivi sıralayan funksiya (pointer ilə)
- String manipulyasiya funksiyaları
- Swap funksiyası

---

## 2.5 Strukturlar (Structures)

### Struct Yaratmaq:
```c
struct Student {
    char name[50];
    int age;
    float gpa;
};

int main() {
    struct Student s1;
    
    strcpy(s1.name, "Ali");
    s1.age = 20;
    s1.gpa = 3.8;
    
    printf("Ad: %s\n", s1.name);
    printf("Yas: %d\n", s1.age);
    printf("GPA: %.2f\n", s1.gpa);
    
    return 0;
}
```

### Typedef ilə:
```c
typedef struct {
    char name[50];
    int age;
} Person;

Person p1 = {"Leyla", 25};
```

### Nested Structures:
```c
struct Date {
    int day;
    int month;
    int year;
};

struct Employee {
    char name[50];
    struct Date birthdate;
    float salary;
};
```

### Struct və Pointer:
```c
struct Student *ptr = &s1;
printf("%s\n", ptr->name);  // -> operatoru
```

### Praktika:
- Tələbə məlumat sistemi
- Kitabxana idarəetmə sistemi
- Əlaqə siyahısı (contact list)

---

## 2.6 Enum və Union

### Enum:
```c
enum Day {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
};

enum Day today = FRIDAY;
```

### Union:
```c
union Data {
    int i;
    float f;
    char str[20];
};

union Data data;
data.i = 10;
printf("%d\n", data.i);

data.f = 3.14;
printf("%f\n", data.f);
```

---

## 2.7 Dinamik Yaddaş (Dynamic Memory)

### malloc:
```c
#include <stdlib.h>

int *ptr = (int*)malloc(5 * sizeof(int));
if (ptr == NULL) {
    printf("Yaddash ayirma ugursuz!\n");
    exit(1);
}

for (int i = 0; i < 5; i++) {
    ptr[i] = i * 10;
}

free(ptr);  // Vacib!
```

### calloc:
```c
int *ptr = (int*)calloc(5, sizeof(int));
// Sıfırlarla inisializə olunur
```

### realloc:
```c
ptr = (int*)realloc(ptr, 10 * sizeof(int));
```

### Praktika:
- Dinamik massiv
- Linked list (sadə)
- Dinamik string

---

## 2.8 Fayllarla İşləmə

### Fayl Açmaq və Bağlamaq:
```c
FILE *fp = fopen("data.txt", "r");
if (fp == NULL) {
    printf("Fayl açılmadı!\n");
    return 1;
}

// İşlər...

fclose(fp);
```

### Fayl Modları:
- `"r"` - oxumaq
- `"w"` - yazmaq (üzərinə yazır)
- `"a"` - əlavə etmək
- `"r+"` - oxumaq və yazmaq
- `"rb"`, `"wb"` - binary mod

### Fayldan Oxumaq:
```c
// Simvol-simvol
int ch;
while ((ch = fgetc(fp)) != EOF) {
    putchar(ch);
}

// Sətir-sətir
char line[100];
while (fgets(line, 100, fp) != NULL) {
    printf("%s", line);
}

// Formatla
int num;
char name[50];
fscanf(fp, "%d %s", &num, name);
```

### Fayla Yazmaq:
```c
FILE *fp = fopen("output.txt", "w");

fprintf(fp, "Salam Dunya!\n");
fputs("Bu sətir\n", fp);
fputc('A', fp);

fclose(fp);
```

### Binary Fayllar:
```c
// Yazmaq
struct Student s = {"Ali", 20, 3.8};
FILE *fp = fopen("students.dat", "wb");
fwrite(&s, sizeof(struct Student), 1, fp);
fclose(fp);

// Oxumaq
FILE *fp = fopen("students.dat", "rb");
fread(&s, sizeof(struct Student), 1, fp);
fclose(fp);
```

### Praktika:
- Mətn redaktoru (sadə)
- Log sistemi
- Tələbə qeydləri (fayla save/load)
- Failə şifrələnmiş mətn yazmaq

---

# Level 3: Qabaqcıl 🚀

## 3.1 İnkişaf Etmiş Pointerlər

### Pointer to Pointer:
```c
int x = 10;
int *ptr = &x;
int **pptr = &ptr;

printf("%d\n", **pptr);  // 10
```

### Function Pointerlər:
```c
int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }

int (*operation)(int, int);

operation = add;
printf("%d\n", operation(5, 3));  // 8

operation = subtract;
printf("%d\n", operation(5, 3));  // 2
```

### void Pointer:
```c
void *ptr;
int x = 10;
ptr = &x;
printf("%d\n", *(int*)ptr);
```

### Praktika:
- Callback funksiyalar
- Generic data structures
- Polimorfizm simulyasiyası

---

## 3.2 Data Strukturları

### Linked List:
```c
struct Node {
    int data;
    struct Node *next;
};

void insert_at_beginning(struct Node **head, int data) {
    struct Node *new_node = (struct Node*)malloc(sizeof(struct Node));
    new_node->data = data;
    new_node->next = *head;
    *head = new_node;
}

void print_list(struct Node *head) {
    while (head != NULL) {
        printf("%d -> ", head->data);
        head = head->next;
    }
    printf("NULL\n");
}
```

### Stack:
```c
#define MAX 100

struct Stack {
    int arr[MAX];
    int top;
};

void push(struct Stack *s, int data) {
    if (s->top == MAX - 1) {
        printf("Stack overflow!\n");
        return;
    }
    s->arr[++(s->top)] = data;
}

int pop(struct Stack *s) {
    if (s->top == -1) {
        printf("Stack underflow!\n");
        return -1;
    }
    return s->arr[(s->top)--];
}
```

### Queue:
```c
struct Queue {
    int arr[MAX];
    int front, rear;
};

void enqueue(struct Queue *q, int data) {
    if (q->rear == MAX - 1) {
        printf("Queue full!\n");
        return;
    }
    q->arr[++(q->rear)] = data;
}

int dequeue(struct Queue *q) {
    if (q->front > q->rear) {
        printf("Queue empty!\n");
        return -1;
    }
    return q->arr[(q->front)++];
}
```

### Praktika:
- Double linked list
- Circular linked list
- Binary tree
- Hash table
- Graph (adjacency list/matrix)

---

## 3.3 Sıralama və Axtarış Alqoritmləri

### Sıralama:
```c
// Bubble Sort
void bubble_sort(int arr[], int n) {
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

// Quick Sort
void quick_sort(int arr[], int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
}

// Merge Sort
void merge_sort(int arr[], int l, int r) {
    if (l < r) {
        int m = l + (r - l) / 2;
        merge_sort(arr, l, m);
        merge_sort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
}
```

### Axtarış:
```c
// Linear Search
int linear_search(int arr[], int n, int x) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == x) return i;
    }
    return -1;
}

// Binary Search
int binary_search(int arr[], int l, int r, int x) {
    while (l <= r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] == x) return mid;
        if (arr[mid] < x) l = mid + 1;
        else r = mid - 1;
    }
    return -1;
}
```

### Praktika:
- Bütün sıralama alqoritmlərini implement et
- Performance müqayisəsi
- Axtarış alqoritmlərini test et

---

## 3.4 Preprocessor Direktivləri

### Makroslar:
```c
#define PI 3.14159
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define SQUARE(x) ((x) * (x))

// Variadic makro
#define LOG(fmt, ...) printf("[LOG] " fmt "\n", __VA_ARGS__)
```

### Conditional Compilation:
```c
#ifdef DEBUG
    printf("Debug mode\n");
#endif

#ifndef MAX_SIZE
    #define MAX_SIZE 100
#endif

#if defined(WINDOWS)
    // Windows kod
#elif defined(LINUX)
    // Linux kod
#else
    // Digər
#endif
```

### Include Guards:
```c
#ifndef MYHEADER_H
#define MYHEADER_H

// Header məzmunu

#endif
```

### Praktika:
- Öz header fayllarını yarat
- Debug makroları yaz
- Platform-specific kod yaz

---

## 3.5 Çox Faylı Layihələr

### Struktur:
```
project/
├── src/
│   ├── main.c
│   ├── utils.c
│   └── math_ops.c
├── include/
│   ├── utils.h
│   └── math_ops.h
└── Makefile
```

### Header Faylı (utils.h):
```c
#ifndef UTILS_H
#define UTILS_H

void print_array(int arr[], int size);
int find_max(int arr[], int size);

#endif
```

### Source Faylı (utils.c):
```c
#include "utils.h"
#include <stdio.h>

void print_array(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int find_max(int arr[], int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}
```

### Makefile:
```makefile
CC = gcc
CFLAGS = -Wall -Wextra -I./include
SRC = src/main.c src/utils.c src/math_ops.c
OBJ = $(SRC:.c=.o)
TARGET = program

all: $(TARGET)

$(TARGET): $(OBJ)
	$(CC) $(OBJ) -o $(TARGET)

%.o: %.c
	$(CC) $(CFLAGS) -c $< -o $@

clean:
	rm -f $(OBJ) $(TARGET)
```

---

## 3.6 Debugging və Testing

### GDB (GNU Debugger):
```bash
# Compile ilə debug info
gcc -g program.c -o program

# GDB-də işə sal
gdb ./program

# GDB komandaları
break main          # breakpoint
run                 # proqramı başlat
next                # növbəti sətir
step                # funksiyaya gir
print variable      # dəyişəni göstər
continue            # davam et
quit                # çıx
```

### Valgrind (Memory Leak Detector):
```bash
valgrind --leak-check=full ./program
```

### Unit Testing (Assert):
```c
#include <assert.h>

void test_add() {
    assert(add(2, 3) == 5);
    assert(add(-1, 1) == 0);
    printf("test_add passed!\n");
}
```

### Praktika:
- GDB ilə debug et
- Memory leak-ləri tap və düzəlt
- Test suite yaz

---

# Level 4: Expert 🎖️

## 4.1 Bitwise Manipulation - Advanced

### Bit Masking:
```c
// Set bit
x |= (1 << n);

// Clear bit
x &= ~(1 << n);

// Toggle bit
x ^= (1 << n);

// Check bit
if (x & (1 << n)) { /* bit set */ }

// Swap iki ədədi (XOR ilə)
a ^= b;
b ^= a;
a ^= b;
```

### Bit Tricks:
```c
// Cüt/Təkliyi yoxla
if (x & 1) { /* Tək */ }

// İkinin qüvvətinə yoxla
if ((x & (x - 1)) == 0) { /* İkinin qüvvəti */ }

// Bit sayını say (Population count)
int count_bits(int n) {
    int count = 0;
    while (n) {
        count += n & 1;
        n >>= 1;
    }
    return count;
}
```

### Praktika:
- Bit array
- Bloom filter
- Compression alqoritmi

---

## 4.2 Memory Management - Deep Dive

### Memory Layout:
```
+------------------+
| Stack            | ← Local variables, function calls
+------------------+
| Heap             | ← Dynamic allocation (malloc)
+------------------+
| BSS Segment      | ← Uninitialized global/static
+------------------+
| Data Segment     | ← Initialized global/static
+------------------+
| Text Segment     | ← Code (read-only)
+------------------+
```

### Custom Allocator:
```c
typedef struct {
    void *memory;
    size_t size;
    size_t used;
} Allocator;

Allocator* allocator_create(size_t size) {
    Allocator *alloc = malloc(sizeof(Allocator));
    alloc->memory = malloc(size);
    alloc->size = size;
    alloc->used = 0;
    return alloc;
}

void* allocator_alloc(Allocator *alloc, size_t size) {
    if (alloc->used + size > alloc->size) {
        return NULL;  // Out of memory
    }
    void *ptr = (char*)alloc->memory + alloc->used;
    alloc->used += size;
    return ptr;
}
```

### Memory Pool:
```c
typedef struct Block {
    struct Block *next;
} Block;

typedef struct {
    Block *free_list;
    size_t block_size;
} MemoryPool;
```

---

## 4.3 Multithreading (pthreads)

### Thread Yaratmaq:
```c
#include <pthread.h>

void* thread_function(void *arg) {
    int *num = (int*)arg;
    printf("Thread: %d\n", *num);
    return NULL;
}

int main() {
    pthread_t thread;
    int num = 42;
    
    pthread_create(&thread, NULL, thread_function, &num);
    pthread_join(thread, NULL);
    
    return 0;
}
```

### Mutex (Mutual Exclusion):
```c
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
int counter = 0;

void* increment(void *arg) {
    for (int i = 0; i < 100000; i++) {
        pthread_mutex_lock(&mutex);
        counter++;
        pthread_mutex_unlock(&mutex);
    }
    return NULL;
}
```

### Semaphore:
```c
#include <semaphore.h>

sem_t semaphore;
sem_init(&semaphore, 0, 1);

sem_wait(&semaphore);  // P operation
// Critical section
sem_post(&semaphore);  // V operation
```

### Praktika:
- Producer-Consumer problemi
- Reader-Writer problemi
- Thread pool
- Parallel merge sort

---

## 4.4 Network Programming

### Socket Programming:
```c
#include <sys/socket.h>
#include <netinet/in.h>

// Server
int server_fd = socket(AF_INET, SOCK_STREAM, 0);

struct sockaddr_in address;
address.sin_family = AF_INET;
address.sin_addr.s_addr = INADDR_ANY;
address.sin_port = htons(8080);

bind(server_fd, (struct sockaddr *)&address, sizeof(address));
listen(server_fd, 3);

int client_socket = accept(server_fd, NULL, NULL);

// Client
int sock = socket(AF_INET, SOCK_STREAM, 0);
struct sockaddr_in serv_addr;
serv_addr.sin_family = AF_INET;
serv_addr.sin_port = htons(8080);

connect(sock, (struct sockaddr *)&serv_addr, sizeof(serv_addr));
```

### Praktika:
- Echo server
- Chat application
- HTTP server (sadə)
- FTP client

---

## 4.5 Advanced File I/O

### mmap (Memory-mapped files):
```c
#include <sys/mman.h>
#include <fcntl.h>

int fd = open("file.txt", O_RDONLY);
struct stat sb;
fstat(fd, &sb);

char *data = mmap(NULL, sb.st_size, PROT_READ, MAP_PRIVATE, fd, 0);

// Fayldan oxu
printf("%s\n", data);

munmap(data, sb.st_size);
close(fd);
```

### Directory Operations:
```c
#include <dirent.h>

DIR *dir = opendir(".");
struct dirent *entry;

while ((entry = readdir(dir)) != NULL) {
    printf("%s\n", entry->d_name);
}

closedir(dir);
```

---

## 4.6 Signal Handling

```c
#include <signal.h>

void signal_handler(int signum) {
    printf("Signal %d tutuldu\n", signum);
    exit(signum);
}

int main() {
    signal(SIGINT, signal_handler);  // Ctrl+C
    signal(SIGTERM, signal_handler);
    
    while(1) {
        printf("Ishliyir...\n");
        sleep(1);
    }
    
    return 0;
}
```

---

# Level 5: Master 🏆

## 5.1 Compiler və Linker

### Compilation Stages:
```
Source Code (.c)
     ↓
Preprocessing (#include, #define)
     ↓
Compilation (Assembly .s)
     ↓
Assembly (Object .o)
     ↓
Linking (Executable)
```

### GCC Flags:
```bash
-Wall          # Bütün xəbərdarlıqlar
-Wextra        # Əlavə xəbərdarlıqlar
-Werror        # Xəbərdarlıqları error kimi qəbul et
-O0, -O1, -O2, -O3  # Optimization levels
-g             # Debug info
-std=c99       # C standard
-I<dir>        # Include directory
-L<dir>        # Library directory
-l<name>       # Link library
```

### Static vs Dynamic Linking:
```bash
# Static library yaratmaq
ar rcs libmylib.a file1.o file2.o

# Static link
gcc main.c -L. -lmylib -o program

# Shared library (.so)
gcc -shared -fPIC file1.c file2.c -o libmylib.so

# Dynamic link
gcc main.c -L. -lmylib -o program
```

---

## 5.2 Inline Assembly

```c
int add_asm(int a, int b) {
    int result;
    __asm__ ("addl %%ebx, %%eax"
             : "=a" (result)
             : "a" (a), "b" (b)
    );
    return result;
}
```

---

## 5.3 Embedded Systems Concepts

### Register Manipulation:
```c
#define GPIO_BASE 0x40020000
#define GPIO_MODE *(volatile uint32_t *)(GPIO_BASE + 0x00)
#define GPIO_OUTPUT *(volatile uint32_t *)(GPIO_BASE + 0x14)

// Set pin 5 as output
GPIO_MODE |= (1 << 10);

// Set pin 5 high
GPIO_OUTPUT |= (1 << 5);
```

### Interrupt Service Routines:
```c
void __attribute__((interrupt)) Timer_ISR(void) {
    // Interrupt handler
    // Clear interrupt flag
}
```

---

## 5.4 Performance Optimization

### Profiling:
```bash
# gprof ilə
gcc -pg program.c -o program
./program
gprof program gmon.out > analysis.txt
```

### Cache Optimization:
```c
// Cache-friendly kod
for (int i = 0; i < N; i++) {
    for (int j = 0; j < M; j++) {
        matrix[i][j] = i + j;  // Row-major access
    }
}

// Cache-unfriendly
for (int j = 0; j < M; j++) {
    for (int i = 0; i < N; i++) {
        matrix[i][j] = i + j;  // Column-major access (yavaş)
    }
}
```

### SIMD (Single Instruction Multiple Data):
```c
#include <immintrin.h>

void add_arrays_simd(float *a, float *b, float *c, int n) {
    for (int i = 0; i < n; i += 8) {
        __m256 va = _mm256_load_ps(&a[i]);
        __m256 vb = _mm256_load_ps(&b[i]);
        __m256 vc = _mm256_add_ps(va, vb);
        _mm256_store_ps(&c[i], vc);
    }
}
```

---

## 5.5 Operating System Concepts

### Process Management:
```c
#include <unistd.h>

pid_t pid = fork();

if (pid == 0) {
    // Child process
    execl("/bin/ls", "ls", "-l", NULL);
} else {
    // Parent process
    wait(NULL);
}
```

### Inter-Process Communication:
```c
// Pipes
int pipefd[2];
pipe(pipefd);

if (fork() == 0) {
    close(pipefd[0]);
    write(pipefd[1], "mesaj", 6);
} else {
    char buf[100];
    close(pipefd[1]);
    read(pipefd[0], buf, 100);
}

// Shared Memory
int shmid = shmget(IPC_PRIVATE, 1024, IPC_CREAT | 0666);
char *shared = (char*)shmat(shmid, NULL, 0);
```

---

# 🛠️ Tools və Development Environment

## Compiler və Build Tools

### GCC / Clang
```bash
# Quraşdırma
# Ubuntu/Debian
sudo apt install gcc build-essential

# Arch Linux
sudo pacman -S gcc

# macOS
xcode-select --install
```

### CMake
```cmake
cmake_minimum_required(VERSION 3.10)
project(MyProject)

set(CMAKE_C_STANDARD 11)

add_executable(program main.c utils.c)
```

### Make / Ninja
```bash
make -j4          # Parallel build
ninja             # Daha sürətli alternative
```

## Debugging Tools

### GDB
```bash
gdb --args ./program arg1 arg2
```

### Valgrind
```bash
valgrind --leak-check=full --show-leak-kinds=all ./program
```

### AddressSanitizer
```bash
gcc -fsanitize=address -g program.c -o program
```

## Static Analysis

### Cppcheck
```bash
cppcheck --enable=all program.c
```

### Clang Static Analyzer
```bash
scan-build gcc program.c
```

## Profiling Tools

### gprof
```bash
gcc -pg program.c -o program
./program
gprof program gmon.out
```

### perf (Linux)
```bash
perf record ./program
perf report
```

## Version Control

### Git
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```

## Documentation

### Doxygen
```c
/**
 * @brief Funkciya təsviri
 * @param a İlk parametr
 * @param b İkinci parametr
 * @return Nəticə
 */
int add(int a, int b) {
    return a + b;
}
```

---

# 📚 Layihə İdeyaları

## Başlanğıc Layihələri:
1. Sadə kalkulator
2. Tələbə qeyd sistemi
3. Tic-Tac-Toe oyunu
4. To-Do list app
5. Rəqəm təxmin oyunu
6. Parol generatoru
7. ASCII art generatoru

## Orta Səviyyə:
1. Text editor
2. Kitabxana idarəetmə sistemi
3. Mini database
4. Snake oyunu (terminal)
5. File compressor
6. Basic shell
7. Sudoku solver
8. Chat application (terminal)

## Advanced:
1. Custom malloc implementation
2. HTTP server
3. JSON parser
4. Virtual machine
5. Compiler (sadə dil üçün)
6. Memory allocator
7. Thread pool library
8. Custom container library (vector, map, etc.)

## Master:
1. Operating system kernel (mini)
2. Garbage collector
3. JIT compiler
4. Network protocol implementation
5. File system
6. Debugger
7. Regular expression engine
8. Emulator (CPU)

---

# 📖 Öyrənmə Resursları

## Kitablar:
1. **"The C Programming Language"** - Brian Kernighan, Dennis Ritchie (K&R)
2. **"C Programming: A Modern Approach"** - K. N. King
3. **"Expert C Programming: Deep C Secrets"** - Peter van der Linden
4. **"Pointers on C"** - Kenneth Reek
5. **"Understanding and Using C Pointers"** - Richard Reese
6. **"C Interfaces and Implementations"** - David Hanson

## Online Kurslar:
- CS50 (Harvard University)
- C Programming Tutorial (YouTube)
- Udemy C courses
- Coursera - C for Everyone

## Websaytlar:
- [cppreference.com](https://cppreference.com)
- [Learn-C.org](https://learn-c.org)
- [GeeksforGeeks C Programming](https://www.geeksforgeeks.org/c-programming-language/)
- [TutorialsPoint C](https://www.tutorialspoint.com/cprogramming/)

## Practice:
- [LeetCode](https://leetcode.com)
- [HackerRank](https://hackerrank.com)
- [CodeWars](https://codewars.com)
- [Project Euler](https://projecteuler.net)

## GitHub Repos:
- [TheAlgorithms/C](https://github.com/TheAlgorithms/C)
- [awesome-c](https://github.com/oz123/awesome-c)

---

# 🎯 Hər Həftə Plan

## Həftə 1-2: Level 1
- Əsasları öyrən
- 5-10 kiçik proqram yaz
- Sintaksis və strukturu mənimsə

## Həftə 3-6: Level 2
- Massiv və pointer-ları dərindən öyrən
- Data strukturları implement et
- 2-3 orta layihə tamamla

## Həftə 7-12: Level 3
- Advanced konseptləri öyrən
- Alqoritmlər üzərində işlə
- Böyük layihə başlat

## Həftə 13-24: Level 4
- System programming öyrən
- Performance optimization
- Kompleks layihələr

## Həftə 25+: Level 5
- Expert mövzular
- Open-source contribution
- Öz library/framework-ünü yarat

---

# ✅ Checklist

## Basics:
- [ ] İlk "Hello World"
- [ ] Bütün data tipləri
- [ ] Operatorlar
- [ ] Şərt ifadələri
- [ ] Döngülər
- [ ] Funksiyalar
- [ ] Massivlər
- [ ] Stringlər

## Intermediate:
- [ ] Pointerlər
- [ ] Strukturlar
- [ ] Dinamik yaddaş
- [ ] Fayllarla iş
- [ ] Preprocessor
- [ ] Makefile

## Advanced:
- [ ] Linked lists
- [ ] Stack/Queue
- [ ] Trees
- [ ] Sorting algorithms
- [ ] Multithreading
- [ ] Networking

## Expert:
- [ ] Custom allocator
- [ ] Compiler internals
- [ ] OS concepts
- [ ] Performance tuning
- [ ] Embedded programming

---

# 🚦 Tips və Best Practices

## Code Quality:
1. **Meaningful names** istifadə et
2. **Kommentlər** yaz (amma artıq deyil)
3. **Consistent formatting** saxla
4. **Error handling** et
5. **Memory leak**-lərdən qorun

## Learning Strategy:
1. **Practice daily** - Hər gün kod yaz
2. **Read code** - Başqalarının kodunu oxu
3. **Build projects** - Nəzəriyyəni praktikaya çevir
4. **Debug regularly** - Debug etməyi öyrən
5. **Ask questions** - Sual verməkdən çəkinmə

## Common Pitfalls:
- Buffer overflow
- Memory leaks
- Dangling pointers
- Integer overflow
- Undefined behavior

---

# 🎓 Son Sözlər

C dili öyrənmək uzun bir yoldur, amma səbr və ardıcıllıqla mütləq nail ola bilərsən. Hər gün bir az öyrən, kod yaz və praktika et.

**Unutma**:
- Hər gün ən azı 1-2 saat praktika et
- Kodlarını test et və debug et
- Başqalarının kodunu oxu
- Layihələr qur
- Community-də aktiv ol

Uğurlar! 🚀

---

**Son yeniləmə**: 2024

**Müəllif**: [Sizin adınız]

**Lisenziya**: MIT

---

## 🤝 Contribution

Bu roadmap açıq mənbədir. Pull request göndərməkdən çəkinməyin!

## 📬 Əlaqə

Issues və təkliflər üçün GitHub issues istifadə edin.

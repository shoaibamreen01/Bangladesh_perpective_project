# Bangladesh Perspective Project

## Overview
This project focuses on predicting lung cancer outcomes using a synthetic dataset with a Bangladesh perspective. The analysis includes data preprocessing, exploratory data analysis (EDA), and machine learning modeling.

## Dataset
- **Source**: Large Synthetic Lung Cancer Dataset (Bangladesh Perspective)
- **Features**: Multiple health and demographic factors including:
  - Gender
  - Smoking Status
  - Air Pollution Exposure
  - Biomass Fuel Use
  - Factory Exposure
  - Family History
  - Diet Habit
  - Symptoms
  - Histology Type
  - Tumor Stage
  - Treatment Type
  - Hospital Type

## Project Structure
The notebook contains the following sections:

1. **Import Library** - Loading necessary Python libraries (pandas, scikit-learn, matplotlib, seaborn)
2. **Data Loading** - Reading the lung cancer dataset
3. **Data Preprocessing** - Converting categorical labels to numeric values using Label Encoding
4. **Exploratory Data Analysis (EDA)** - Visualizing patterns and distributions in the data
5. **Model Development** - Building and training machine learning models
6. **Performance Evaluation** - Assessing model accuracy and generating classification reports

## Key Libraries Used
- **pandas** - Data manipulation and analysis
- **scikit-learn** - Machine learning models and preprocessing
- **matplotlib & seaborn** - Data visualization
- **sklearn.ensemble.RandomForestClassifier** - Main predictive model

## Target Variable
- **Survival_1_Year**: Binary classification (Yes/No) - Predicting one-year survival rate

## How to Use
1. Ensure you have the required datasets and libraries installed
2. Open the Jupyter notebook in your preferred environment (Jupyter Lab, VS Code, Google Colab)
3. Run the cells sequentially to reproduce the analysis

## Requirements
- Python 3.x
- pandas
- scikit-learn
- matplotlib
- seaborn

## Installation
```bash
pip install pandas scikit-learn matplotlib seaborn
```

## Author
Shoaib Akhter

## License
This project is open-source and available for educational and research purposes.
